<!--
  ============================================
  SECTION: dashboard/RecentApplicationsSection.vue
  ============================================
  
  LOKASI: components/sections/dashboard/
  HALAMAN: Dashboard (pages/dashboard/index.vue)
  
  FUNGSI:
  Menampilkan daftar lamaran terbaru user.
  
  CARA PAKAI:
  ```vue
  <SectionsDashboardRecentApplicationsSection :applications="recentApps" />
  ```
  
  ============================================
-->
<script setup lang="ts">
// ========== TYPES ==========
interface Application {
  id: number
  jobTitle: string
  company: string
  appliedAt: string
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted'
}

// ========== PROPS ==========
interface Props {
  applications?: Application[]
}

const props = withDefaults(defineProps<Props>(), {
  applications: () => [
    { id: 1, jobTitle: 'Frontend Developer', company: 'PT Teknologi', appliedAt: '2026-02-05', status: 'reviewed' },
    { id: 2, jobTitle: 'UI Designer', company: 'Creative Studio', appliedAt: '2026-02-03', status: 'pending' },
    { id: 3, jobTitle: 'Admin Staff', company: 'CV Maju', appliedAt: '2026-02-01', status: 'interview' }
  ]
})

// ========== COMPUTED ==========
const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  reviewed: 'bg-blue-100 text-blue-700',
  interview: 'bg-purple-100 text-purple-700',
  rejected: 'bg-red-100 text-red-700',
  accepted: 'bg-green-100 text-green-700'
}

const statusLabels: Record<string, string> = {
  pending: 'Menunggu',
  reviewed: 'Dilihat',
  interview: 'Interview',
  rejected: 'Ditolak',
  accepted: 'Diterima'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<template>
  <section>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-slate-900">Lamaran Terbaru</h2>
      <NuxtLink to="/dashboard/applications" class="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors flex items-center gap-2">
        <span>Lihat Semua</span>
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr>
              <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700">Posisi</th>
              <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700">Perusahaan</th>
              <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700">Tanggal</th>
              <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="app in applications" :key="app.id" class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 font-semibold text-slate-900">{{ app.jobTitle }}</td>
              <td class="px-6 py-4 text-slate-600">{{ app.company }}</td>
              <td class="px-6 py-4 text-slate-500 text-sm font-medium">{{ formatDate(app.appliedAt) }}</td>
              <td class="px-6 py-4">
                <span
                  :class="statusColors[app.status]"
                  class="px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                >
                  {{ statusLabels[app.status] }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
