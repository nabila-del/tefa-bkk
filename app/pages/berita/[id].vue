<script setup>
const route = useRoute()
const router = useRouter()
const { getBeritaById } = useBerita()

const berita = computed(() => getBeritaById(Number(route.params.id)))
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-10">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="router.push('/berita')"
        class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Kembali ke Berita
      </button>

      <div v-if="berita" class="mt-8 overflow-hidden rounded-3xl bg-white shadow-xl">
        <div class="relative h-72 overflow-hidden sm:h-96">
          <img
            :src="berita.image"
            :alt="berita.title"
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 text-white">
            <span class="inline-flex rounded-full bg-indigo-600/90 px-4 py-2 text-sm font-semibold">{{ berita.category }}</span>
          </div>
        </div>

        <div class="space-y-6 p-8 lg:p-12">
          <div>
            <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{{ berita.title }}</h1>
            <p class="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{{ berita.date }}</p>
          </div>

          <div class="prose prose-slate max-w-none text-slate-700">
            <p>{{ berita.content }}</p>
          </div>
        </div>
      </div>

      <div v-else class="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">
        <h2 class="text-2xl font-semibold text-slate-900">Berita tidak ditemukan</h2>
        <p class="mt-3">Pastikan Anda membuka tautan yang benar atau kembali ke daftar berita.</p>
      </div>
    </div>
  </div>
</template>