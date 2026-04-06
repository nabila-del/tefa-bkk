<script setup>
const { berita } = useBerita()
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Berita Terbaru</p>
        <h1 class="mt-3 text-4xl sm:text-5xl font-bold text-slate-900">Informasi & Kabar Penting</h1>
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">Ikuti berita terbaru tentang event, pelatihan, dan kegiatan SMK yang penting untuk karier kamu.</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="item in berita"
          :key="item.id"
          :to="`/berita/${item.id}`"
          class="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="relative h-56 overflow-hidden rounded-t-3xl">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                {{ item.category }}
              </span>
            </div>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <h2 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {{ item.title }}
              </h2>
              <p class="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                {{ item.content }}
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-slate-100">
              <span class="text-sm font-medium text-slate-500">{{ item.date }}</span>
              <div class="flex items-center text-indigo-600 font-semibold text-sm">
                <span>Baca selengkapnya</span>
                <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-if="berita.length === 0" class="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">
        <p class="text-lg font-semibold">Belum ada berita tersedia</p>
        <p class="mt-2">Cek kembali nanti untuk informasi terbaru.</p>
      </div>
    </div>
  </div>
</template>