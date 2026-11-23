---
title: "Building a training diagnostic from Apple Health data"
description: "What I learned turning a pile of .hae files into a weekly training report that says something useful, not just pretty."
date: 2026-11-20
tags: ["health data", "python", "training"]
---

Most health apps are good at showing numbers. They are less good at telling you what the numbers mean for the next training week.

I built a small diagnostic around my own Apple Health export. It reads the AutoSync folder from Health Auto Export, decodes the .hae files, and produces a weekly report with a baseline, session-level evidence, and a short list of things to change.

## The interesting part is not the chart

A chart of weekly training load is easy. The hard part is deciding what counts as a meaningful change.

A few principles made the report more useful:

- compare each session with a personal baseline, not with a generic norm;
- separate "what happened" from "what it probably means";
- show the evidence, including the data that is missing;
- make the next action concrete enough to do on a Tuesday morning.

## What the data can and cannot tell you

Heart rate, pace, cadence, and sleep are useful signals. They are not a diagnosis. A higher heart rate at the same pace can be fatigue, heat, caffeine, stress, or simply a bad night. The report should say that out loud instead of pretending the number has one meaning.

The same is true for training load. TRIMP and ACWR are models. They are useful for spotting a spike, not for proving that a session was good or bad.

## What I would keep

The weekly rhythm. A report every Monday is a small ritual: look back, adjust one thing, move on. The goal is not a perfect dashboard. The goal is a slightly better decision than last week.
