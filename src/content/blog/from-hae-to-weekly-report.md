---
title: "From .hae files to a weekly report"
description: "A short tour of the pipeline behind the training page: LZFSE decoding, load models, and a private static report."
date: 2026-10-12
tags: ["python", "data engineering", "apple health"]
---

Health Auto Export writes compressed .hae files into iCloud. The format is not meant to be read by hand, but it is readable once you know what is inside: LZFSE or LZVN compressed JSON, with a small uncompressed block for tiny payloads.

The pipeline is deliberately boring:

1. Watch the AutoSync folder.
2. Decode the files into Python objects.
3. Build daily metrics and session summaries.
4. Compare the current week with an anchored baseline.
5. Render a self-contained HTML report and a PDF.
6. Upload the latest report to a private page.

## Why a static report

A static HTML file is easy to keep private, easy to archive, and easy to open on a phone. It also avoids running a database for a single user. The analysis is a batch job; the website is just a reading surface.

## The baseline is the product

The first version of the report was a dashboard. The second version was a diagnosis. The difference was a baseline: a stable set of personal norms that every new week is compared against. Without it, every chart is just decoration.

The baseline is stored as JSON. The anchor stays fixed; a rolling baseline updates as new data arrives. That makes it possible to say "this week is different" without moving the goalposts every time.
