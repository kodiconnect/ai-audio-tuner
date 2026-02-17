# REW Pro: Advanced Automation & Multi-Mic Optimization

If you have a **REW Pro License**, this project becomes significantly more powerful. Here is how to optimize the bridge and methodology for the Pro environment.

## 1. Multi-Input RTA (The Ultimate MMM)
REW Pro allows for multiple microphones to be used simultaneously.
- **The Workflow**: Instead of waving one mic around your head (standard MMM), you can mount 4-6 mics in a "head-shaped" cluster.
- **Project Advantage**: Our `get_measurement` logic will retrieve the **combined spatial average** of all mics instantly, eliminating the human error of the "mic dance."

## 2. API Stability & Remote Control
While the REW API is available in beta for standard users, the Pro version provides a more stable background server.
- **Auto-Start**: Configure REW Pro to start the API server on boot so the `npm start` bridge is always ready.
- **Remote Laptop**: You can run the REW Pro workstation on a separate machine (even in the trunk) and control the entire tuning session via the bridge over a local network.

## 3. Advanced Spline Fitting
REW Pro's "Fit to Target" logic is more advanced.
- **The Integration**: When using our `analyze_eq.js` script, Pro users can expect better "Spline" data which leads to more accurate 10-band PEQ calculations in the Audison software.

## 4. Multi-Channel Alignment
Pro users can measure the relative phase of multiple speakers simultaneously.
- **The Tweak**: Use the REW Pro "Acoustic Timing Reference" on multiple channels to verify that the Sub and Front Stage are perfectly aligned in a single sweep, rather than step-by-step.

## 📦 Pro Configuration Tip
Include the following in your `.env` file to leverage Pro stability:
```bash
REW_API_TIMEOUT=10000  # Longer timeouts for heavy multi-mic processing
REW_USE_SIMULTANEOUS=true # If you are using a multi-mic array
```
