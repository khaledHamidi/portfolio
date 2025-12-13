---
title: "DATCOM: Ready Aircraft Models & Aerodynamic Output Files"
summary: "Ready to use DATCOM (Includes verified models (ASW-20, B-737, Canard, Citation, Navion, Seneca II, MiG-17)) for MATLAB integration."
date: 2025-12-09
authors:
  - admin
tags:
  - Aerospace
  - MATLAB
  - Research
categories:
  - Engineering and Robotics
---

# USAF Digital DATCOM – Ready-to-Use Aerodynamic Dataset

## What is Digital DATCOM?

**Digital DATCOM** (Data Compendium) is a computer program developed by the **United States Air Force** to estimate aircraft stability and control characteristics. It implements the methods documented in the classic USAF Stability and Control DATCOM handbook and was originally created at Wright–Patterson Air Force Base.

From these models, the code can compute:

- Lift coefficient (CL) and lift‑curve slope (CLα)
- Drag polar and zero‑lift drag (CD0)
- Pitching‑moment coefficient (Cm) and static margin
- Lateral–directional derivatives (Cyβ, Cnβ, Clβ)
- Dynamic derivatives (CLq, Cmq, Clp, Cnr)

This makes DATCOM a practical tool for early‑stage design, stability analysis, and flight‑simulation models.

## The Input Format Problem

Digital DATCOM uses a strict **FORTRAN NAMELIST** input format. On a modern machine, most “mysterious” errors are actually formatting issues, not aerodynamic problems.

Some frequent pitfalls are:

1. **Comments**: The `*` character is *not* a valid comment symbol.
2. **NACA card**: Use dashes, for example `NACA-W-5-23014` instead of `NACA W 5 23014`.
3. **Blank lines**: Empty lines inside a namelist will stop the parser.
4. **Namelist prefix**: Each `$NAMELIST` must start in column 1 (no leading spaces).
5. **Inline comments**: The `!` character generally breaks the parser.
6. **Case termination**: Each case must be closed with a `NEXT CASE` card.

Typical error messages look like:

```
** ERROR ** UNKNOWN NAMELIST NAME
** ILLEGAL CONTROL CARD
ERROR(S), THIS CASE NOT RUN
```

If you see these, the first thing to check is the file format and card layout.

## Ready-to-Use Package

To avoid spending hours chasing format errors, this package provides **corrected input files** and **pre‑computed output files** that you can use directly for analysis, plotting, or MATLAB post‑processing.

### Included Aircraft Models

ASW 20, B 737, Canard, Citation, Navion, Seneca2, MiG 17, Cessna 172

| Aircraft           | Type             | Alpha Range | Mach  | Description                             |
|--------------------|------------------|------------:|:-----:|-----------------------------------------|
| **ASW‑20**         | Sailplane        |    -2°–4°   | 0.10  | High‑performance glider                 |
| **B‑737**          | Transport        |  -16°–24°   | 0.20  | Commercial jet airliner                 |
| **Canard**         | Research         |   -6°–24°   | 0.60  | Canard‑configuration study              |
| **Citation**       | Business jet     |  -16°–24°   | 0.40  | Cessna Citation II (Model 550)         |
| **Citation_simple**| Business jet     |  -16°–24°   | 0.40  | Simplified Citation model               |
| **Citation_airfoil** | Business jet   |  -16°–24°   | 0.40  | Citation with custom airfoil            |
| **Navion**         | General aviation |   -2°–20°   | 0.158 | Ryan Navion light aircraft              |
| **Seneca2**       | Twin‑engine      |   -8°–20°   | 0.24  | Piper PA‑34‑200T                        |
| **MiG‑17**         | Fighter          |   -4°–14°   | 0.60  | Classic Soviet jet fighter              |
| **Cessna172**        | General aviation |   -4°–16°   | 0.12  | Cessna 172 Skyhawk, popular trainer     |


### Package Contents

The archive **`datcom_pack.zip`** contains:

- `datcom.exe` – Digital DATCOM executable
- `*.dcm` – DATCOM input files (same format, different extensions)
- `*.out` – Pre‑computed output files (ready for MATLAB or other tools)

### MATLAB Integration

The `.out` files provide tabulated aerodynamic data that can be read directly into MATLAB and other numerical tools for:

- Flight‑simulation models
- Static and dynamic stability analysis
- Control‑system design and gain tuning
- Performance and envelope calculations

Each case has already been run and checked, so you can go straight to plotting, curve fitting, or building state‑space models.

**For MATLAB usage**:
```
aero  = datcomimport("filename.out");   % Load Digital DATCOM output
```

## Download

You can download the full package here:

**[datcom_pack.zip](datcom_pack.zip)**

All input cases have been tested and verified to run correctly with the provided executable and MATLAB post‑processing.

---

*Reference: AFWAL‑TR‑79‑3032; DATCOM‑Tools (GPL‑3.0) by YANG‑DEMIN; USAF Stability and Control DATCOM.*
