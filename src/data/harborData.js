export const harborNavigation = [
  { label: '运行总览', to: '/' },
  { label: '采样窗口', to: '/windows' },
  { label: '船期变更', to: '/changes' },
  { label: '检疫记录', to: '/records' },
]

export const harborSummary = {
  hero: {
    title: '压载水采样窗口排班板',
    description:
      '围绕靠港窗口、检疫班组和复检压力做排班编排，适合港口检疫团队作为前端原型继续扩展。',
    windowLabel: '今日采样窗口',
    windowCount: 6,
    note: '晚班只保留复核与补录任务。',
  },
  stats: [
    { label: '待复检任务', value: 2, tone: 'warn' },
    { label: '高风险备注', value: 5, tone: 'danger' },
    { label: '靠泊船次', value: 4, tone: 'neutral' },
  ],
}

export const harborRules = [
  '同船两次采样最少间隔 90 分钟。',
  '高盐度舱位先取空白样，再取正式样。',
  '异常荧光记录必须带舱位照片编号。',
  '19:00 后只保留复核任务，不新增首检。',
]

export const harborWindows = [
  {
    shipName: '浙海 17',
    berth: '3 号泊位',
    tanks: ['B2', 'C1'],
    startAt: '2026-06-20T06:40:00+08:00',
    priority: 'high',
    inspector: '王岚',
    note: '靠泊后 15 分钟内取首样。',
  },
  {
    shipName: 'North Sora',
    berth: '5 号泊位',
    tanks: ['C1'],
    startAt: '2026-06-20T09:20:00+08:00',
    priority: 'medium',
    inspector: '赵冉',
    note: '上午完成复测并同步浊度记录。',
  },
  {
    shipName: '绿岛拖轮补给船',
    berth: '2 号临泊位',
    tanks: ['A1 尾舱'],
    startAt: '2026-06-20T13:10:00+08:00',
    priority: 'medium',
    inspector: '陈策',
    note: '靠港时间短，样本瓶提前准备。',
  },
  {
    shipName: 'Blue Kestrel',
    berth: '7 号泊位',
    tanks: ['A4'],
    startAt: '2026-06-20T17:45:00+08:00',
    priority: 'low',
    inspector: '苏蔚',
    note: '待代理回传完整舱图后执行。',
  },
]

export const harborRecords = [
  {
    shipName: '浙海 17',
    sampleCode: 'BW-2406-B2',
    status: 'sealed',
    assignee: '王岚',
    note: '样本瓶温度正常，已封存。',
  },
  {
    shipName: 'North Sora',
    sampleCode: 'BW-2406-C1',
    status: 'recheck',
    assignee: '赵冉',
    note: '显微计数偏高，下午复测。',
  },
  {
    shipName: 'Blue Kestrel',
    sampleCode: 'BW-2406-A4',
    status: 'pending',
    assignee: '苏蔚',
    note: '外轮代理尚未回传舱图。',
  },
]

export const harborCrew = [
  {
    name: '王岚',
    shift: '早班',
    focus: '高盐度首检',
  },
  {
    name: '赵冉',
    shift: '中班',
    focus: '显微复测',
  },
  {
    name: '苏蔚',
    shift: '晚班',
    focus: '异常样本补录',
  },
]

export const berthChanges = [
  {
    shipName: '浙海 17',
    originalBerth: '3 号泊位',
    newBerth: '5 号泊位',
    originalTime: '2026-06-20T06:40:00+08:00',
    newTime: '2026-06-20T08:20:00+08:00',
    changeType: 'delay',
    reportedAt: '2026-06-20T05:15:00+08:00',
    reason: '前船离泊延误，航道拥堵',
    severity: 'high',
  },
  {
    shipName: 'North Sora',
    originalBerth: '5 号泊位',
    newBerth: '3 号泊位',
    originalTime: '2026-06-20T09:20:00+08:00',
    newTime: '2026-06-20T07:50:00+08:00',
    changeType: 'advance',
    reportedAt: '2026-06-20T06:30:00+08:00',
    reason: '提前完成上一港作业，预计提前靠泊',
    severity: 'medium',
  },
  {
    shipName: 'Green Horizon',
    originalBerth: '2 号临泊位',
    newBerth: '7 号泊位',
    originalTime: '2026-06-20T14:00:00+08:00',
    newTime: '2026-06-20T16:30:00+08:00',
    changeType: 'delay',
    reportedAt: '2026-06-20T09:45:00+08:00',
    reason: '临时泊位检修，转至 7 号泊位',
    severity: 'medium',
  },
  {
    shipName: '东方之星',
    originalBerth: '4 号泊位',
    newBerth: '4 号泊位',
    originalTime: '2026-06-20T11:00:00+08:00',
    newTime: '2026-06-20T13:40:00+08:00',
    changeType: 'delay',
    reportedAt: '2026-06-20T08:00:00+08:00',
    reason: '海上雾航减速，预计晚到 2 小时 40 分',
    severity: 'high',
  },
]

export const samplingReschedules = [
  {
    shipName: '浙海 17',
    tanks: ['B2', 'C1'],
    originalInspector: '王岚',
    newInspector: '王岚',
    originalTime: '2026-06-20T06:55:00+08:00',
    newTime: '2026-06-20T08:35:00+08:00',
    sampleCode: 'BW-2406-B2',
    status: 'pending',
    syncStatus: 'synced',
    note: '跟随靠泊时间顺延，首样需在靠泊后 15 分钟内采集',
  },
  {
    shipName: 'North Sora',
    tanks: ['C1'],
    originalInspector: '赵冉',
    newInspector: '王岚',
    originalTime: '2026-06-20T09:35:00+08:00',
    newTime: '2026-06-20T08:05:00+08:00',
    sampleCode: 'BW-2406-C1',
    status: 'recheck',
    syncStatus: 'pending',
    note: '提前靠泊，改由早班王岚接手首检，赵冉继续负责复测',
  },
  {
    shipName: 'Green Horizon',
    tanks: ['A3', 'B1'],
    originalInspector: '陈策',
    newInspector: '苏蔚',
    originalTime: '2026-06-20T14:15:00+08:00',
    newTime: '2026-06-20T16:45:00+08:00',
    sampleCode: 'BW-2406-A3',
    status: 'pending',
    syncStatus: 'pending',
    note: '转至 7 号泊位并延后，改由晚班苏蔚执行',
  },
  {
    shipName: '东方之星',
    tanks: ['D2'],
    originalInspector: '陈策',
    newInspector: '赵冉',
    originalTime: '2026-06-20T11:15:00+08:00',
    newTime: '2026-06-20T13:55:00+08:00',
    sampleCode: 'BW-2406-D2',
    status: 'pending',
    syncStatus: 'pending',
    note: '雾航延误，改由中班赵冉执行采样',
  },
]

export const affectedCrews = [
  {
    name: '王岚',
    shift: '早班',
    originalTasks: ['浙海 17 首检'],
    newTasks: ['浙海 17 首检（延后）', 'North Sora 首检（新增）'],
    impact: '增加',
    conflictLevel: 'high',
    note: '需在 08:05 完成 North Sora 首检后，08:35 继续浙海 17 采样，间隔仅 30 分钟',
  },
  {
    name: '赵冉',
    shift: '中班',
    originalTasks: ['North Sora 首检 + 复测', '东方之星 首检'],
    newTasks: ['North Sora 复测', '东方之星 首检（延后）'],
    impact: '调整',
    conflictLevel: 'medium',
    note: 'North Sora 首检已移交早班，仅保留复测；东方之星延后至中班时段',
  },
  {
    name: '陈策',
    shift: '中班',
    originalTasks: ['绿岛补给船 首检', 'Green Horizon 首检', '东方之星 首检'],
    newTasks: ['绿岛补给船 首检'],
    impact: '减轻',
    conflictLevel: 'low',
    note: 'Green Horizon 与东方之星均延后至晚班，中班任务减轻',
  },
  {
    name: '苏蔚',
    shift: '晚班',
    originalTasks: ['Blue Kestrel 首检', '异常样本补录'],
    newTasks: ['Blue Kestrel 首检', 'Green Horizon 首检（新增）', '异常样本补录'],
    impact: '增加',
    conflictLevel: 'medium',
    note: '新增 Green Horizon 采样任务，需在 17:45 Blue Kestrel 之前完成 16:45 的采样',
  },
]

export const changeSummary = {
  totalChanges: 4,
  delayedShips: 3,
  advancedShips: 1,
  rescheduledSamples: 4,
  affectedCrewCount: 4,
  pendingSync: 3,
}
