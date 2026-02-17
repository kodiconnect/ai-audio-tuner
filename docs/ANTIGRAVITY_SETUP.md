# Antigravity Setup: Connecting the AI Agent

To allow Antigravity (or any MCP-compatible AI agent) to control REW and analyze your car audio data, you must register the **REW Bridge** as an MCP server.

## 1. Locate your Config File
Open your Antigravity MCP configuration file. 
- **Mac**: `~/.gemini/antigravity/mcp_config.json`
- **Windows**: `%USERPROFILE%\.gemini\antigravity\mcp_config.json`

## 2. Add the REW Bridge Configuration
Add the following entry to the `mcpServers` object in your `mcp_config.json`:

```json
{
  "mcpServers": {
    "rew-bridge": {
      "command": "node",
      "args": [
        "/absolute/path/to/ai-audio-tuner/rew-bridge.js"
      ],
      "env": {
        "REW_API_URL": "http://127.0.0.1:4735"
      }
    }
  }
}
```

> [!IMPORTANT]
> Change `/absolute/path/to/ai-audio-tuner/` to the actual directory where you cloned this repository.

## 3. Restart Antigravity
After saving the file, restart your Antigravity session. You can verify the connection by asking the agent:
> "Can you check the status of the REW bridge?"

## 4. Why this is the "Key Piece"
By registering this bridge, the AI agent gains the ability to:
1. **Trigger Sweeps**: It can automatically start a measurement and name it correctly.
2. **Fetch Data**: It can pull the raw frequency response data into its context for mathematical analysis.
3. **Compare to Targets**: It can calculate the EQ cuts needed to match the Audiofrog House Curve in real-time.
