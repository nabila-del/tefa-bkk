<script setup lang="ts">
const { acara } = useAcara()
const router = useRouter()

const goDetail = (id: number) => {
  router.push(`/acara/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">

    <div class="max-w-7xl mx-auto px-4 py-10">
      <h1 class="text-2xl font-bold mb-6">Acara Terbaru</h1>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in acara"
          :key="item.id"
          @click="goDetail(item.id)"
          class="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <img :src="item.image" class="rounded-t-xl h-40 w-full object-cover" />

          <div class="p-4">
            <h2 class="font-semibold text-lg">{{ item.title }}</h2>
            <p class="text-sm text-gray-500">{{ item.location }}</p>
            <p class="text-sm text-gray-400">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>