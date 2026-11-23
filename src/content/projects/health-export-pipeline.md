---
title: "健康数据管道"
description: "一个宽容的 Health Auto Export 读取器，为了扛住真实的 iCloud 同步行为而写。"
year: "2026"
role: "数据工程"
stack: ["Python", "libcompression", "JSON", "iCloud"]
featured: true
order: 2
---

Apple Health 的导出经常被描述成 XML。我的情况不一样：Health Auto Export 把压缩过的 .hae 文件写进 iCloud 容器，每个指标或每次训练一个文件。

这条管道需要处理：

- LZFSE 块、LZVN 块，以及很小的一段未压缩数据；
- 重复的单位（kJ 和 kcal、lb 和 kg、km 和 mi）；
- 同步边缘的不完整日期；
- 既有丰富间隔数据、也几乎什么都没有的训练记录。

## 设计选择

防御式地读。指标缺了就继续；某一天不完整，就标成不完整，而不是悄悄平均进这一周；一次训练没有心率序列，就退回摘要数据，并且说出来。

结果是一个能回答问题、又不会假装输入比实际更干净的数据层。
