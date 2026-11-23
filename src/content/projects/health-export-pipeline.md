---
title: "Health Export Pipeline"
description: "A tolerant reader for Health Auto Export's LZFSE/LZVN files, built to survive real iCloud sync behaviour."
year: "2026"
role: "Data engineering"
stack: ["Python", "libcompression", "JSON", "iCloud"]
featured: true
order: 2
---

Apple Health exports are often described as XML. My setup is different: Health Auto Export writes compressed .hae files into an iCloud container, one file per metric or workout.

The pipeline needed to handle:

- LZFSE blocks, LZVN blocks, and tiny uncompressed blocks;
- duplicate units (kJ and kcal, lb and kg, km and mi);
- partial days at the edge of a sync;
- workouts with rich interval data and workouts with almost nothing.

## The design choice

Read defensively. If a metric is missing, keep going. If a day is incomplete, mark it as incomplete instead of silently averaging it into the week. If a workout has no heart-rate series, fall back to the summary and say so.

The result is a data layer that can answer questions without pretending the input is cleaner than it is.
