---
title: "健康数据管道"
description: "Apple Health 导出来的 .hae 文件，格式不友好但能读。我写了一个尽量不崩的读取器，用来扛真实的 iCloud 同步。"
year: "2026"
role: "数据工程"
stack: ["Python", "libcompression", "JSON", "iCloud"]
featured: true
order: 2
---

Apple Health 的导出，很多人以为是 XML。我这边不是：Health Auto Export 直接把压缩过的 .hae 文件写进 iCloud 容器，一个指标或一次训练一个文件。

所以读取器得能扛住这些东西：

- LZFSE 块、LZVN 块，还有很小的一段未压缩数据；
- 重复单位（kJ 和 kcal、lb 和 kg、km 和 mi）；
- 同步到一半的日子；
- 有完整心率序列的训练，和几乎什么都没有的训练。

## 设计原则

读不死就行。指标缺了就跳过，一天不完整就标成不完整，不偷偷平均进整周；一次训练没有心率序列，就退回摘要数据，并且说出来。

最后得到的数据层不算漂亮，但能回答问题，而且不假装输入比实际更干净。
