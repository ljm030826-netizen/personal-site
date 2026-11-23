export const training = {
  week: '2026 · W47',
  range: '11/16 — 11/22',
  updated: '每周一更新',
  source: 'Apple Health 导出（Health Auto Export → iCloud）',
  intro:
    '这是我自己写脚本、每周跑一次的训练报告。数据从 Apple Health 导出，跟过去几个月的自己比，结论只给我自己看。这里公开的只有指标，原始数据不上网。',
  load: { week: 340, baseline: 155, unit: 'TRIMP' },
  acwr: { ratio: 1.55, acute: 46.5, chronic: 29.7 },
  recovery: {
    rhr: { week: 63, base: 60, min: 40, max: 80, unit: 'bpm' },
    hrv: { week: 40, base: 44, min: 20, max: 70, unit: 'ms' },
    sleep: { week: 6.8, target: 7.75, min: 4, max: 10, unit: 'h' },
  },
  mix: [
    { label: '力量', value: 23, color: '#8fae9b' },
    { label: '跑步', value: 11, color: '#d0764f' },
    { label: '骑行', value: 7, color: '#84a7b2' },
  ],
  mixTotal: 44,
  technique: [
    { label: '步频', value: 167, min: 150, max: 185, target: '170–175', unit: 'spm', ok: false },
    { label: '垂直振幅比', value: 10.0, min: 6, max: 14, target: '低于 9%', unit: '%', ok: false },
    { label: '触地时间', value: 273, min: 200, max: 320, target: '低于 260 ms', unit: 'ms', ok: false },
  ],
  weekDays: [
    { day: '周一', date: '11/16', type: 'rest', label: '休息' },
    { day: '周二', date: '11/17', type: 'rest', label: '休息' },
    { day: '周三', date: '11/18', type: 'run', label: '5K' },
    { day: '周四', date: '11/19', type: 'rest', label: '休息' },
    { day: '周五', date: '11/20', type: 'rest', label: '休息' },
    { day: '周六', date: '11/21', type: 'ride', label: '长骑 43.1 km' },
    { day: '周日', date: '11/22', type: 'rest', label: '休息' },
  ],
  summary: [
    '有氧底子不差：5K 连续跑配速 6:08/km；长骑 43.1 km、均速 19.9 km/h；VO2max 42.81。',
    '恢复是限制：ACWR 1.55；睡眠债 4.3 小时；静息心率 63 bpm（基线 60）；HRV 40 ms（基线 44）。',
    '跑步技术是杠杆：步频 167 spm、垂直振幅 9.8 cm、垂直比 10.0%、触地 273 ms。',
  ],
  sessions: [
    '11/18 5K：6:08/km、心率 173/180；同样的配速，11/12 时心率是 164，效率因子从 0.99 掉到 0.94（−5%）。',
    '11/21 长骑：43.1 km、130 分钟、19.9 km/h、心率 150；表观减速耦联 −9.3%，但前半段爬升更多，不能当作有氧退步。',
    '力量：本周 1 次、77 分钟；基线是 1.7 次/周。心率负荷会低估力量刺激，需要记录组数与重量。',
  ],
  recoveryText: [
    '急性负荷偏高：ACWR 1.55（7 天 / 28 天），已经超过 1.3 的负荷突增参考线。',
    '睡眠债明显：最近 7 天主睡眠平均 6.8 小时，累计睡眠债约 4.3 小时。',
  ],
  next: [
    '周 TRIMP 压到 250–280；低强度训练占 70% 以上。',
    '轻松跑心率 140–150；长骑心率 135–145；每周一次质量跑。',
    '跑步步频目标 170–175；每周两次 6×20 秒加速跑。',
    '力量每周 2 次，记录深蹲 / 硬拉 / 划船 / 核心的重量与次数。',
    '睡眠目标 7.5–8 小时；质量课前不要出现少于 6 小时的夜晚。',
  ],
  baseline: [
    { label: '锚点', value: '2026-08-20 → 2026-11-21 · 44 次训练' },
    { label: '5K', value: '6:08/km · 168 bpm' },
    { label: '静息心率', value: '60 bpm' },
    { label: 'HRV', value: '44 ms' },
    { label: '睡眠', value: '6.9 小时 · 效率 83%' },
  ],
  disclaimer: '这是一份专业训练诊断，不构成医疗建议。数据窗口为 11/16–11/22；睡眠、HRV、静息心率按各自最新同步日期。',
};
