<!--
  ============================================
  FILE: layouts/default.vue
  ============================================

  FUNGSI:
  Layout adalah "wrapper" atau "bungkus" untuk halaman.
  Semua halaman yang pakai layout ini akan punya navbar dan footer yang sama.

  CARA KERJA:
  - <slot /> = tempat konten halaman ditampilkan
  - Layout ini otomatis dipakai kalau tidak ada layout lain yang di-set

  CARA PAKAI LAYOUT LAIN:
  Di halaman, tambahkan:
  <script setup>
  definePageMeta({
    layout: 'admin'  // pakai layouts/admin.vue
  })
  </script>

  ============================================
-->
<template>
  <div class="layout">
    <!-- Navbar -->
    <header class="navbar">
      <nav class="container flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="logo">BK</div>
          <span class="font-bold text-xl text-white">Bursa Kerja</span>
        </NuxtLink>

        <!-- Menu Navigasi -->
        <div class="nav-menu">
          <NuxtLink to="/" class="nav-link">Beranda</NuxtLink>
          <NuxtLink to="/jobs" class="nav-link">Lowongan</NuxtLink>
          <NuxtLink to="/acara" class="nav-link">Acara</NuxtLink>
          <NuxtLink to="/berita" class="nav-link">Berita</NuxtLink>
        </div>

        <!-- Tombol CTA -->
        <div class="flex items-center gap-3">
          <button class="px-4 py-2 rounded-lg font-medium text-blue-600 bg-white hover:bg-blue-50 transition-all">Masuk</button>
          <button class="px-4 py-2 rounded-lg font-medium text-white bg-blue-700 hover:bg-blue-800 transition-all">Daftar</button>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Info Aplikasi -->
          <div class="footer-section">
            <h3 class="footer-title">Bursa Kerja Khusus</h3>
            <p class="footer-text">
              Platform penghubung antara siswa SMK dengan dunia industri untuk membangun karir yang sukses.
            </p>
          </div>

          <!-- Links -->
          <div class="footer-section">
            <h4 class="footer-subtitle">Menu</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/" class="footer-link">Beranda</NuxtLink></li>
              <li><NuxtLink to="/jobs" class="footer-link">Lowongan</NuxtLink></li>
              <li><NuxtLink to="/acara" class="footer-link">Acara</NuxtLink></li>
              <li><NuxtLink to="/berita" class="footer-link">Berita</NuxtLink></li>
            </ul>
          </div>

          <!-- Kontak -->
          <div class="footer-section">
            <h4 class="footer-subtitle">Kontak</h4>
            <ul class="footer-links">
              <li class="footer-link">📧 info@bkk.sch.id</li>
              <li class="footer-link">📞 (021) 123-4567</li>
              <li class="footer-link">📍 Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Bursa Kerja Khusus SMK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
