---
title: "Training Diagnostic"
description: "A weekly training report that reads Apple Health data, compares it with a personal baseline, and explains what to change next."
year: "2026"
role: "Design, data, code"
stack: ["Python", "SVG", "LZFSE", "HTML/PDF"]
featured: true
order: 1
---

Training apps show data. I wanted a report that makes a decision.

The diagnostic reads the AutoSync folder from Health Auto Export, decodes .hae files, and builds a weekly picture from four layers:

- training sessions and heart-rate zones;
- performance signals such as pace-to-heart-rate efficiency and decoupling;
- recovery signals such as HRV, resting heart rate, and sleep stages;
- a stable personal baseline that every new week is compared against.

## What makes it different

The report does not stop at "you trained 3 times". It asks whether the sessions were executed at the right intensity, whether the load jumped too quickly, and whether the recovery signals support the next step.

It also marks its own uncertainty: two running-dynamics sessions are not a trend, and a decoupling number without a power meter or terrain context is not proof of fitness.

## Stack

Python for the data layer, a small SVG chart toolkit for the visuals, and a self-contained HTML file that can be printed to PDF. The private page is served behind Caddy basic auth.
