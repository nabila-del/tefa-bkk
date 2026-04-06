<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { getAcaraById } = useAcara()

const acara = computed(() =>
  getAcaraById(Number(route.params.id))
)

if (!acara.value) {
  router.push('/acara')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <!-- Header Navigation -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <button
            @click="router.push('/acara')"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Kembali ke Acara
          </button>
          <h1 class="text-lg font-semibold text-gray-900">Detail Acara</h1>
        </div>
      </div>
    </header>

    <!-- Loading/Error State -->
    <div v-if="!acara" class="flex items-center justify-center min-h-[70vh]">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Acara Tidak Ditemukan</h2>
        <p class="text-gray-600 mb-6">Maaf, acara yang Anda cari tidak tersedia atau telah dihapus.</p>
        <button
          @click="router.push('/acara')"
          class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Lihat Semua Acara
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="relative mb-8 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
        <div class="absolute inset-0 bg-black/40"></div>
        <img
          :src="acara.image"
          :alt="acara.title"
          class="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div class="text-white">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{{ acara.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              <div class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ acara.location }}
              </div>
              <div class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ acara.date }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Tentang Acara</h2>
            <div class="prose prose-lg max-w-none">
              <p class="text-gray-700 leading-relaxed text-base sm:text-lg">{{ acara.description }}</p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Event Details Card -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Detail Acara</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-500">Lokasi</p>
                  <p class="text-gray-900">{{ acara.location }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-500">Tanggal</p>
                  <p class="text-gray-900">{{ acara.date }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Card -->
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 class="text-xl font-bold mb-4">Bergabunglah!</h3>
            <p class="text-indigo-100 mb-6">Jangan lewatkan kesempatan untuk mengikuti acara ini.</p>
            <button class="w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>