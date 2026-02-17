# Audison AP bit: Mapping & Configuration Protocol

The Audison AP bit software (and older original bit software) has specific UI constraints that this project addresses.

## 1. The 10-Pole PEQ Constraint
The AP8.9 bit allows for **10 Parametric EQ poles** per channel.
- **Logic**: Our `analyze_eq.js` script identifies the 10 most critical peaks that deviate from the target curve.
- **Mapping**: We prioritize **Cuts** over **Boosts** to maintain digital headroom and prevent clipping.

## 2. Delay vs. Distance
The Audison software often tries to calculate delays for you based on `cm` or `in`. 
- **The Workflow**: This project bypasses the calculation by providing **absolute ms values**. 
- **Manual Override**: Set all speaker distances to the same value (e.g., 100cm) until the "ms Delay" column reads 0.00. Then, manually enter our calculated `ms` values into the "Fine Set" or "Delay" fields.

## 3. Grouping & Bridging
- **Bridged Channels (1+2, 3+4)**: These receive the core Front EQ.
- **Unbridged Rear Fill (5, 6)**: Keep these **Flat** and **-6dB** lower than the fronts for a natural soundstage.
- **Subwoofer (9)**: Usually requires **0.00ms delay** and **Flat EQ**, assuming the front stage is properly slowed down to match it.

## 4. Safety First
Always ensure the **Audison Software is "Online"** (Finalized to DSP) before running sweeps. Playing full-range noise without the 200Hz High-Pass filter active can damage your 4" mid-range speakers.
