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
  <div class="min-h-screen bg-gray-50">

    <div v-if="!acara" class="text-center py-20">
      <h1>Acara tidak ditemukan</h1>
    </div>

    <div v-else class="max-w-4xl mx-auto p-6">
      <img :src="acara.image" class="rounded-xl mb-6" />

      <h1 class="text-2xl font-bold">{{ acara.title }}</h1>
      <p class="text-gray-500">{{ acara.location }} • {{ acara.date }}</p>

      <p class="mt-4 text-gray-700">
        {{ acara.description }}
      </p>
    </div>

  </div>
</template>