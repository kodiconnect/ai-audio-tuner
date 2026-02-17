const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

/**
 * REW Bridge: A Bridge between AI Agents and Room EQ Wizard (REW).
 * This tool allows an AI to trigger measurements and retrieve frequency
 * response data from the REW API.
 */

const REW_API_URL = process.env.REW_API_URL || "http://127.0.0.1:4735";
const LOG_FILE = path.join(process.cwd(), "bridge_log.txt");

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(LOG_FILE, logMessage);
}

const server = new Server(
    { name: "rew-bridge", version: "1.1.0" },
    { capabilities: { tools: {} } }
);

/**
 * Helper to call the REW HTTP API
 */
async function callRew(endpoint, method = "GET", data = null) {
    try {
        log(`Calling REW: ${method} ${endpoint}`);
        const config = {
            method,
            url: `${REW_API_URL}${endpoint}`,
            timeout: 5000,
        };

        if (data !== null) {
            config.data = data;
            if (typeof data === "string") {
                config.headers = { "Content-Type": "text/plain" };
            } else {
                config.headers = { "Content-Type": "application/json" };
            }
        }

        const response = await axios(config);
        return response.data;
    } catch (error) {
        log(`REW API Error: ${error.message}`);
        throw error;
    }
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_status",
                description: "Check if REW API is reachable and active",
                inputSchema: { type: "object", properties: {} },
            },
            {
                name: "configure_measurement",
                description: "Set up the 'Make a Measurement' dialog (Name, Type, Reference)",
                inputSchema: {
                    type: "object",
                    properties: {
                        name: { type: "string", description: "Name for the measurement" },
                        timingReference: { type: "string", description: "e.g., 'Acoustic' or 'None'" }
                    }
                },
            },
            {
                name: "get_measurement",
                description: "Retrieve complete metadata and frequency response for a measurement ID",
                inputSchema: {
                    type: "object",
                    properties: {
                        id: { type: "string", description: "The index or UUID of the measurement" }
                    },
                    required: ["id"]
                }
            }
        ],
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    log(`Tool call: ${request.params.name}`);
    try {
        const args = request.params.arguments;
        switch (request.params.name) {
            case "get_status":
                const status = await callRew("/application/status");
                return { content: [{ type: "text", text: JSON.stringify(status) }] };
            case "configure_measurement":
                if (args.name) await callRew("/measure/name", "POST", args.name);
                if (args.timingReference) await callRew("/measure/timing/reference", "POST", args.timingReference);
                return { content: [{ type: "text", text: `Configured measurement: ${args.name || "Default"}` }] };
            case "get_measurement":
                const data = await callRew(`/measurements/${args.id}`);
                return { content: [{ type: "text", text: JSON.stringify(data) }] };
            default:
                throw new Error(`Unknown tool: ${request.params.name}`);
        }
    } catch (error) {
        return { isError: true, content: [{ type: "text", text: error.message }] };
    }
});

const transport = new StdioServerTransport();
server.connect(transport).then(() => {
    log("AI Audio Tuner Bridge started.");
}).catch((err) => {
    log(`Startup error: ${err.message}`);
});
