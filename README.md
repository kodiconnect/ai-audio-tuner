# AI Audio Tuner: REW Bridge & DSP Calibration

An automated bridge between Room EQ Wizard (REW) and DSP software (like Audison AP bit/bit Drive) to achieve professional-grade acoustic tuning via AI-driven analysis.

## 🚀 Overview
This project provides the tools and methodology to transform a raw car audio system into a high-fidelity listening environment. It automates measurement retrieval from REW and provides logic to calculate optimal Time Alignment and PEQ settings based on professional house curves.

### Key Capabilities:
- **REW API Bridge**: Automates measurement capture and data retrieval.
- **MMM Analysis**: Processing Moving Mic RTA data for spatially averaged EQ.
- **Dash-Centric Timing**: Logic for sub-to-dash phase alignment and centering.
- **Audit-Ready Documentation**: Generates tuning records for every step.

## 🛠 Prerequisites
- **REW (Room EQ Wizard)**: V5.40 Beta 117 or newer (Pro license recommended for full automation).
- **Node.js**: V18+ for running the bridge scripts.
- **Hardware**: MiniDSP UMIK-1 (or similar) and a compatible DSP/Amplifier.

## 📦 Setup & Usage
1. **Clone the repository**:
   ```bash
    git clone https://github.com/kodiconnect/ai-audio-tuner.git
   cd ai-audio-tuner
   npm install
   ```
2. **Start the REW API**: In REW, go to `Preferences -> API` and ensure the server is running on port 4735.
3. **Launch the Bridge**:
   ```bash
   npm start
   ```

## 📚 Documentation
- [Methodology](docs/METHODOLOGY.md): The "why" and "how" of our acoustic approach.
- [Audison Protocol](docs/AUDISON_PROTOCOL.md): Specific mapping for Audison AP bit software.
- [Example Case Study](examples/E70_X5D_Results.md): Full tuning log of a 2012 BMW X5D.

## 🤝 Contributing
Contributions are welcome! Please see the [Methodology](docs/METHODOLOGY.md) for current Logic and Analysis gaps.
