<script setup>
const route = useRoute()
const { getBeritaById } = useBerita()

const berita = computed(() =>
  getBeritaById(Number(route.params.id))
)
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">

    <div v-if="berita">
      <img :src="berita.image" class="rounded-xl mb-6"/>

      <h1 class="text-2xl font-bold">{{ berita.title }}</h1>
      <p class="text-gray-400">{{ berita.date }}</p>

      <p class="mt-4 text-gray-700">
        {{ berita.content }}
      </p>
    </div>

    <div v-else>
      <h1>Berita tidak ditemukan</h1>
    </div>

  </div>
</template>