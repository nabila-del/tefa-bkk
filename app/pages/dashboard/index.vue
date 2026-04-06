<!--
  ============================================
  FILE: pages/dashboard/index.vue
  ============================================
  
  FUNGSI:
  Halaman dashboard user setelah login (route: /dashboard)
  
  STRUKTUR SECTIONS:
  Halaman ini menggunakan sections dari folder:
  /components/sections/dashboard/
  
  SECTIONS YANG DIGUNAKAN:
  1. StatsSection            - Statistik ringkasan
  2. RecentApplicationsSection - Lamaran terbaru
  
  ============================================
-->
<script setup lang="ts">
import { ref } from 'vue'

// ========== META ==========
useSeoMeta({
  title: 'Dashboard - Bursa Kerja Khusus'
})

// ========== DATA ==========
// Data user (nanti dari API/auth)
const user = ref({
  name: 'John Doe',
  email: 'john@example.com'
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
    <div class="bg-white border-b border-slate-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {{ user.name.charAt(0).toUpperCase() }}
          </div>
          <div>
            <h1 class="text-3xl font-bold text-slate-900">
              Selamat datang, {{ user.name }}! 👋
            </h1>
            <p class="text-slate-600 mt-1 text-lg">
              Pantau perkembangan lamaranmu di sini.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!--
        ========================================
        SECTIONS DASHBOARD
        ========================================
        Semua section untuk dashboard ada di:
        /components/sections/dashboard/
        
        Penamaan component: SectionsDashboard[NamaSection]
        ========================================
      -->

      <!-- 1. Stats Section -->
      <SectionsDashboardStatsSection />

      <!-- 2. Recent Applications Section -->
      <SectionsDashboardRecentApplicationsSection />
    </div>
  </div>
</template>
