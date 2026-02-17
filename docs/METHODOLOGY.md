# Tuning Methodology: The AI-Acoustic Workflow

This document explains the technical logic used in this project to achieve high-fidelity sound in the challenging environment of a vehicle cabin.

## 1. The Moving Mic Measurement (MMM)
Instead of taking a single measurement at one fixed point, we use **MMM RTA**. 
- **The Problem**: A single mic spot captures "room modes" (reflections) that aren't audible but cause EQ errors.
- **The Solution**: Waving the mic in a figure-8 pattern creates a **Spatially Averaged** response. What's left on the graph is the "Truth" of what your ears actually hear.

## 2. The Raw Baseline Pivot
We never tune on top of old settings.
- **Step**: Flatten all EQ and Zero all Delays.
- **Why**: This reveals the **Real Physical Truth** of the car's distances and reflections.
- **Result**: We avoid "EQ Stacking" which causes phase distortion and noise.

## 3. Dealing with Windshield Reflections
In cars like BMW/Lexus where speakers are in the dash/doors, the sound bounces off the glass.
- **The Peak**: This causes a massive harsh peak between **1.4kHz and 1.6kHz**.
- **The Logic**: Our scripts prioritize surgical cuts in this specific "shouty" range to achieve the transparent "Mark Levinson" vocal texture.

## 4. Time Alignment (The Sub-Forward Logic)
We use the **Trunk Sub** as the "Slowest" reference (0.0ms delay).
- **The Goal**: Slow down the dash speakers so their sound waves hit the driver at the exact same microsecond as the bass from the trunk.
- **The Math**: `(Physical Distance of Sub - Physical Distance of Dash) / Speed of Sound = Delay in ms`.

## 5. The Audiofrog House Curve
We target the **Audiofrog Target Curve**:
- +10dB Bass boost below 100Hz.
- Flat mid-range.
- -1dB per octave downward slope for Treble.
- This creates a warm, non-fatiguing, and immersive soundstage.
