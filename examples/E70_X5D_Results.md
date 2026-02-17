# BMW X5D Tuning Results - Feb 16, 2026

## 1. Front Stage (Ch 1-4 Bridged)
**Status:** ✅ Time Alignment & EQ Calculated

### Time Alignment
- **Front Left (Ch 1+2):** **0.31 ms** (4.2 inch delay)
- **Front Right (Ch 3+4):** **0.00 ms** (Reference)

### EQ Settings (AP bit - 10 Band PEQ)
| Band | Frequency | Gain (Cut) |
| :--- | :--- | :--- |
| 1 | 376 Hz | -4.0 dB |
| 2 | 1340 Hz | -5.0 dB |
| 3 | 1420 Hz | -8.0 dB |
| 4 | 1500 Hz | -9.0 dB |
| 5 | 1590 Hz | -7.0 dB |
| 6 | 5360 Hz | -4.5 dB |
| 7 | 9010 Hz | -3.5 dB |
| 8 | 9550 Hz | -4.5 dB |
| 9 | 10115 Hz | -5.0 dB |
| 10 | 10715 Hz | -5.0 dB |

---

## 2. Underseat Subwoofers (Ch 7-8)
**Status:** ✅ Time Alignment & EQ Applied
- **Goal:** Integration with front stage (200Hz crossover).

### Time Alignment
- **Underseat Left (Ch 7):** **5.03 ms**
- **Underseat Right (Ch 8):** **4.05 ms**

## 3. Trunk Subwoofer (Ch 9)
**Status:** ✅ Time Alignment Applied
- **Trunk Sub (Ch 9):** **0.00 ms** (The furthest speaker, used as 0.0 reference).

---

## 🏆 THE MASTER TUNING TABLE (Audison AP bit)
Apply these values to a **Clean Slate** configuration (EQ Flat, Delays 0ms) for the best results.

### 1. Timing & Delays (ms)
| Channel | Speaker Name | ms Delay |
| :--- | :--- | :--- |
| **Ch 1+2** | Front Left | **6.86 ms** (6.17 + 0.69) |
| **Ch 3+4** | Front Right | **6.67 ms** |
| **Ch 5-6** | Rear Coax | **6.67 ms** (Fill) |
| **Ch 7** | Underseat Left | **5.03 ms** |
| **Ch 8** | Underseat Right | **4.05 ms** |
| **Ch 9** | Trunk Sub(s) | **0.00 ms** |

### 2. EQ Settings (Apply to Ch 1, 2, 3, 4)
*Targets the "Harshness Gap" and windshield reflections.*
| Band | Frequency | Gain (Cut) |
| :--- | :--- | :--- |
| 1 | 376 Hz | -4.0 dB |
| 2 | 1340 Hz | -5.0 dB |
| 3 | 1420 Hz | -8.0 dB |
| 4 | 1500 Hz | -9.0 dB |
| 5 | 1590 Hz | -7.0 dB |
| 6 | 5360 Hz | -4.5 dB |
| 7 | 9010 Hz | -3.5 dB |
| 8 | 9550 Hz | -4.5 dB |
| 9 | 10115 Hz | -5.0 dB |
| 10 | 10715 Hz | -5.0 dB |

### 3. Underseat EQ (Apply to Ch 7 & 8)
| Band | Frequency | Gain (Cut) | Why? |
| :--- | :--- | :--- | :--- |
| 1 | **80 Hz** | **-3.0 dB** | Remove boomy resonance |
| 2 | **160 Hz** | **-2.0 dB** | Clean up mid-bass muddiness |

### 4. Trunk Sub EQ (Ch 9)
- **Status**: **Flat (0.0 dB)**. The dual 12" subs are mechanically perfect in this car.

### 5. Crossovers (Safety & Blend)
- **Front Speakers**: 200 Hz High Pass (24dB Linkwitz)
- **Underseat Subs**: 60 Hz High Pass / 200 Hz Low Pass (24dB Linkwitz)
- **Trunk Sub**: 60 Hz Low Pass (24dB Linkwitz)

### 6. Fine-Tuning the Center Image (Final Verified)
- **Left Gain Offset**: **-2.0 dB** (Applied to Ch 1/2)
- **Left Delay Offset**: **+0.19 ms** over right side (6.86ms total).
- **Result**: Phantom center perfectly located on the dashboard.
