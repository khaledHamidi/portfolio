---
title: "Qlink: Serial Command API for Arduino"
date: 2023-01-10
summary: "A lightweight and efficient Arduino library that simplifies serial communication, allowing you to control devices from a PC, Raspberry Pi, or any serial terminal."
draft: false
authors:
  - admin
categories:
  - "Software Development"
tags:
  - "IoT"
  - "Automation"
  - "Freelance"
---

## Overview

**Qlink** is a powerful yet lightweight serial command API designed for Arduino, Raspberry Pi, PC, and other embedded systems. It streamlines communication between devices by providing a simple framework for registering and handling commands sent over a serial connection. With support for multiple parameter types (INT, FLOAT, STRING, LONG), Qlink is the ideal solution for controlling your Arduino projects from external applications written in Python, C#, or from a simple serial monitor.

## Key Features

- **Dynamic Command System**: Easily define and register custom commands with a clean macro-based syntax (`DEF` and `REG`).
- **Multi-Type Parameter Support**: Natively parse integer, float, string, and long arguments from incoming serial commands.
- **Simplified Responses**: Send formatted strings back to the host device with a single `link.response()` call.
- **Lightweight & Efficient**: Designed for microcontrollers, Qlink has a minimal footprint and processes commands in real-time.
- **Cross-Platform Control**: Enables seamless control of Arduino from a PC (Windows/Linux), Mac, or Raspberry Pi.

## Common Use Cases

- Controlling robots or CNC machines from a desktop application.
- Sending sensor data from Arduino to a Python script for logging or analysis.
- Creating interactive prototypes that respond to commands from a serial terminal.
- Configuring device settings (e.g., LED brightness, motor speed) on the fly without reprogramming.

## Installation

The easiest way to install is directly through the Arduino IDE:
1.  Open the Arduino IDE.
2.  Go to **Sketch** > **Include Library** > **Manage Libraries...**.
3.  Search for "**Qlink**".
4.  Click the **Install** button.

You can also install the library manually by downloading the zip file below.

## Code Example: Simple Blink Control

The following example demonstrates how to control the built-in LED on an Arduino board using a `DELAY` command sent over serial.

```cpp
#include <Qlink.h>

int blinkInterval = 1000;  // Default blink interval
Qlink link(Serial);        // Initialize Qlink on the hardware serial port

// Define the "DELAY" command, which accepts one integer argument
DEF(DELAY, INT) {
  blinkInterval = Convert(Args[0], int);
  link.response("Blink interval updated to %d ms", blinkInterval);
}

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  REG(link, DELAY); // Register the DELAY command
}

void loop() {
  link.loop(); // Continuously listen for incoming commands

  // Blink the LED at the current interval
  digitalWrite(LED_BUILTIN, HIGH);
  delay(blinkInterval);
  digitalWrite(LED_BUILTIN, LOW);
  delay(blinkInterval);
}
```
To use this, you would simply send a command like `DELAY 500` from your serial monitor or application, and the LED blink rate would instantly update.

[Download the Qlink Library (.zip)](Qlink.zip)
