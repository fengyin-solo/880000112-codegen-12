<script setup>
import PanelSection from '../components/common/PanelSection.vue'
import StatCard from '../components/common/StatCard.vue'
import {
  changeSummary,
  berthChanges,
  samplingReschedules,
  affectedCrews,
} from '../data/harborData'
import {
  formatTime,
  formatDateTime,
  formatTimeDiff,
  changeTypeMeta,
  severityMeta,
  syncStatusMeta,
  impactMeta,
  conflictLevelMeta,
  statusMeta,
} from '../utils/formatters'

const statCards = [
  { label: '船期变更', value: changeSummary.totalChanges, tone: 'neutral' },
  { label: '延后靠泊', value: changeSummary.delayedShips, tone: 'warn' },
  { label: '提前靠泊', value: changeSummary.advancedShips, tone: 'success' },
  { label: '采样改期', value: changeSummary.rescheduledSamples, tone: 'danger' },
  { label: '受影响班组', value: changeSummary.affectedCrewCount, tone: 'warn' },
  { label: '待同步', value: changeSummary.pendingSync, tone: 'danger' },
]
</script>

<template>
  <div class="view-stack">
    <section class="stats-grid">
      <StatCard
        v-for="card in statCards"
        :key="card.label"
        :label="card.label"
        :value="card.value"
        :tone="card.tone"
      />
    </section>

    <PanelSection title="靠泊时间变更" badge="按上报时间排序">
      <div class="berth-grid">
        <article
          v-for="item in berthChanges"
          :key="item.shipName"
          class="change-card"
        >
          <div class="card-topline">
            <h4>{{ item.shipName }}</h4>
            <div class="pill-group">
              <span :class="['tone-pill', `tone-pill--${changeTypeMeta(item.changeType).tone}`]">
                {{ changeTypeMeta(item.changeType).label }}
              </span>
              <span :class="['tone-pill', `tone-pill--${severityMeta(item.severity).tone}`]">
                {{ severityMeta(item.severity).label }}
              </span>
            </div>
          </div>
          <p class="change-row">
            <span class="change-label">泊位：</span>
            <span class="change-old">{{ item.originalBerth }}</span>
            <span class="change-arrow">→</span>
            <span class="change-new">{{ item.newBerth }}</span>
          </p>
          <p class="change-row">
            <span class="change-label">时间：</span>
            <span class="change-old">{{ formatTime(item.originalTime) }}</span>
            <span class="change-arrow">→</span>
            <span class="change-new">{{ formatTime(item.newTime) }}</span>
            <span class="time-diff">{{ formatTimeDiff(item.newTime, item.originalTime) }}</span>
          </p>
          <p class="change-reason">{{ item.reason }}</p>
          <small class="reported-at">上报时间：{{ formatDateTime(item.reportedAt) }}</small>
        </article>
      </div>
    </PanelSection>

    <PanelSection title="采样任务改期" badge="关联靠泊变更">
      <div class="sampling-grid">
        <article
          v-for="item in samplingReschedules"
          :key="item.sampleCode"
          class="change-card"
        >
          <div class="card-topline">
            <h4>{{ item.shipName }} · {{ item.sampleCode }}</h4>
            <div class="pill-group">
              <span :class="['tone-pill', `tone-pill--${syncStatusMeta(item.syncStatus).tone}`]">
                {{ syncStatusMeta(item.syncStatus).label }}
              </span>
              <span :class="['tone-pill', `tone-pill--${statusMeta(item.status).tone}`]">
                {{ statusMeta(item.status).label }}
              </span>
            </div>
          </div>
          <p class="change-row">
            <span class="change-label">舱位：</span>
            <span>{{ item.tanks.join('、') }}</span>
          </p>
          <p class="change-row">
            <span class="change-label">时间：</span>
            <span class="change-old">{{ formatTime(item.originalTime) }}</span>
            <span class="change-arrow">→</span>
            <span class="change-new">{{ formatTime(item.newTime) }}</span>
            <span class="time-diff">{{ formatTimeDiff(item.newTime, item.originalTime) }}</span>
          </p>
          <p class="change-row">
            <span class="change-label">执行人：</span>
            <template v-if="item.originalInspector !== item.newInspector">
              <span class="change-old">{{ item.originalInspector }}</span>
              <span class="change-arrow">→</span>
              <span class="change-new">{{ item.newInspector }}</span>
            </template>
            <template v-else>
              <span>{{ item.originalInspector }}（不变）</span>
            </template>
          </p>
          <p class="change-note">备注：{{ item.note }}</p>
        </article>
      </div>
    </PanelSection>

    <PanelSection title="受影响班组" badge="任务负荷变化">
      <div class="crew-grid">
        <article
          v-for="item in affectedCrews"
          :key="item.name"
          class="change-card"
        >
          <div class="card-topline">
            <h4>{{ item.name }} · {{ item.shift }}</h4>
            <div class="pill-group">
              <span :class="['tone-pill', `tone-pill--${conflictLevelMeta(item.conflictLevel).tone}`]">
                {{ conflictLevelMeta(item.conflictLevel).label }}
              </span>
              <span :class="['tone-pill', `tone-pill--${impactMeta(item.impact).tone}`]">
                {{ impactMeta(item.impact).label }}
              </span>
            </div>
          </div>
          <div class="task-compare">
            <div class="task-column">
              <span class="task-label">原任务</span>
              <ul class="task-list">
                <li v-for="task in item.originalTasks" :key="task" class="task-item task-old">
                  {{ task }}
                </li>
              </ul>
            </div>
            <div class="task-column">
              <span class="task-label">新任务</span>
              <ul class="task-list">
                <li v-for="task in item.newTasks" :key="task" class="task-item task-new">
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
          <p class="change-note">备注：{{ item.note }}</p>
        </article>
      </div>
    </PanelSection>
  </div>
</template>

<style scoped>
.view-stack {
  display: grid;
  gap: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}

.berth-grid,
.sampling-grid,
.crew-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.change-card {
  display: grid;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 20px;
  background: #f4f7f4;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.pill-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

h4,
p,
small,
ul {
  margin: 0;
}

h4 {
  font-size: 1rem;
}

.change-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  color: #5f7670;
  font-size: 0.92rem;
}

.change-label {
  color: #405753;
  font-weight: 500;
}

.change-old {
  color: #8a6b5f;
  text-decoration: line-through;
}

.change-arrow {
  color: #6b8a7e;
}

.change-new {
  color: #2d5a4a;
  font-weight: 500;
}

.time-diff {
  padding: 3px 8px;
  border-radius: 999px;
  background: #e7f0eb;
  font-size: 0.78rem;
  color: #3a5a4e;
}

.change-reason {
  color: #405753;
  font-size: 0.92rem;
}

.reported-at {
  color: #7a8e88;
  font-size: 0.78rem;
}

.change-note {
  color: #5f7670;
  font-size: 0.88rem;
}

.task-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.task-column {
  display: grid;
  gap: 6px;
}

.task-label {
  font-size: 0.78rem;
  color: #6b8a7e;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.task-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 6px;
}

.task-item {
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 0.88rem;
}

.task-old {
  background: #f0e8e4;
  color: #8a6b5f;
  text-decoration: line-through;
}

.task-new {
  background: #e1f0e4;
  color: #2d5a4a;
}

.tone-pill {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.76rem;
}

.tone-pill--danger {
  background: #f7ddd7;
}

.tone-pill--warn {
  background: #fff1d2;
}

.tone-pill--neutral {
  background: #dce8f7;
}

.tone-pill--success {
  background: #e1f0e4;
}

@media (max-width: 980px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .berth-grid,
  .sampling-grid,
  .crew-grid {
    grid-template-columns: 1fr;
  }

  .task-compare {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
