export function formatTime(isoString, locale = 'zh-CN') {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(isoString))
}

export function formatDateTime(isoString, locale = 'zh-CN') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(isoString))
}

export function formatTimeDiff(targetIso, baseIso) {
  const target = new Date(targetIso)
  const base = new Date(baseIso)
  const diffMs = target - base
  const isDelayed = diffMs > 0
  const absDiffMs = Math.abs(diffMs)
  const totalMinutes = Math.floor(absDiffMs / (1000 * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const prefix = isDelayed ? '延后' : '提前'

  if (hours === 0) {
    return `${prefix} ${minutes} 分`
  }

  if (minutes === 0) {
    return `${prefix} ${hours} 小时`
  }

  return `${prefix} ${hours} 小时 ${minutes} 分`
}

export function changeTypeMeta(type) {
  const map = {
    delay: {
      label: '延后靠泊',
      tone: 'warn',
    },
    advance: {
      label: '提前靠泊',
      tone: 'success',
    },
  }

  return map[type] ?? map.delay
}

export function severityMeta(severity) {
  const map = {
    high: {
      label: '高',
      tone: 'danger',
    },
    medium: {
      label: '中',
      tone: 'warn',
    },
    low: {
      label: '低',
      tone: 'neutral',
    },
  }

  return map[severity] ?? map.low
}

export function syncStatusMeta(status) {
  const map = {
    synced: {
      label: '已同步',
      tone: 'success',
    },
    pending: {
      label: '待同步',
      tone: 'warn',
    },
    failed: {
      label: '同步失败',
      tone: 'danger',
    },
  }

  return map[status] ?? map.pending
}

export function impactMeta(impact) {
  const map = {
    '增加': {
      label: '任务增加',
      tone: 'danger',
    },
    '调整': {
      label: '任务调整',
      tone: 'warn',
    },
    '减轻': {
      label: '任务减轻',
      tone: 'success',
    },
  }

  return map[impact] ?? { label: '未变', tone: 'neutral' }
}

export function conflictLevelMeta(level) {
  const map = {
    high: {
      label: '高冲突',
      tone: 'danger',
    },
    medium: {
      label: '中冲突',
      tone: 'warn',
    },
    low: {
      label: '低冲突',
      tone: 'success',
    },
  }

  return map[level] ?? map.low
}

export function statusMeta(status) {
  const map = {
    sealed: {
      label: '已封存',
      tone: 'success',
    },
    recheck: {
      label: '待复检',
      tone: 'warn',
    },
    pending: {
      label: '待采样',
      tone: 'neutral',
    },
  }

  return map[status] ?? map.pending
}

export function priorityMeta(priority) {
  const map = {
    high: {
      label: '高优先级',
      tone: 'danger',
    },
    medium: {
      label: '中优先级',
      tone: 'warn',
    },
    low: {
      label: '低优先级',
      tone: 'neutral',
    },
  }

  return map[priority] ?? map.low
}
