<!--
  ============================================
  SECTION: dashboard/StatsSection.vue
  ============================================
  
  LOKASI: components/sections/dashboard/
  HALAMAN: Dashboard (pages/dashboard/index.vue)
  
  FUNGSI:
  Menampilkan statistik ringkasan untuk user di dashboard.
  
  CARA PAKAI:
  ```vue
  <SectionsDashboardStatsSection :stats="userStats" />
  ```
  
  ============================================
-->
<script setup lang="ts">
// ========== PROPS ==========
interface StatItem {
  label: string
  value: number | string
  icon: string
  color: string
}

interface Props {
  stats?: StatItem[]
}

const props = withDefaults(defineProps<Props>(), {
  stats: () => [
    { label: 'Lamaran Terkirim', value: 12, icon: '📤', color: 'bg-blue-100 text-blue-600' },
    { label: 'Dilihat Perusahaan', value: 8, icon: '👁️', color: 'bg-green-100 text-green-600' },
    { label: 'Interview', value: 3, icon: '🎯', color: 'bg-purple-100 text-purple-600' },
    { label: 'Lowongan Disimpan', value: 5, icon: '❤️', color: 'bg-pink-100 text-pink-600' }
  ]
})
</script>

<template>
  <section class="mb-12">
    <h2 class="text-xl font-bold text-slate-900 mb-6">Ringkasan Aktivitas</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div class="flex items-center gap-4">
          <div :class="[stat.color, 'w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm']">
            {{ stat.icon }}
          </div>
          <div class="flex-1">
            <p class="text-3xl font-bold text-slate-900">{{ stat.value }}</p>
            <p class="text-sm font-medium text-slate-600 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
