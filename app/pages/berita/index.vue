<script setup>
const { berita } = useBerita()
</script>

<template>
  <div class="max-w-7xl mx-auto p-6">

    <h1 class="text-2xl font-bold mb-6">Berita</h1>

    <div class="grid md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="item in berita"
        :key="item.id"
        :to="`/berita/${item.id}`"
        class="bg-white rounded-xl shadow hover:shadow-lg"
      >
        <img :src="item.image" class="h-40 w-full object-cover rounded-t-xl"/>

        <div class="p-4">
          <h2 class="font-semibold">{{ item.title }}</h2>
          <p class="text-sm text-gray-400">{{ item.date }}</p>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>