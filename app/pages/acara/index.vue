<script setup lang="ts">
const { acara } = useAcara()
const router = useRouter()

const goDetail = (id: number) => {
  router.push(`/acara/${id}`)
}
</script>

<template>
  <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%); padding: 3rem 0;">
    <!-- Header Section -->
    <div style="background: rgba(255, 255, 255, 0.8); padding: 3rem 0; margin-bottom: 3rem; border-bottom: 1px solid #e2e8f0;">
      <div class="container">
        <div class="text-center">
          <h1 style="font-size: 2.5rem; font-weight: 700; color: #1e293b; margin-bottom: 1rem;">
            Acara <span style="color: #4f46e5;">Terbaru</span>
          </h1>
          <p style="font-size: 1.125rem; color: #64748b; max-width: 42rem; margin: 0 auto; line-height: 1.6;">
            Temukan berbagai acara menarik untuk pengembangan karir dan pendidikan Anda
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div style="margin-bottom: 3rem;">
      <div class="container">
        <div class="grid grid-cols-1 grid-cols-2 grid-cols-3" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
          <div style="background: white; border-radius: 1rem; padding: 1.5rem; text-align: center; box-shadow: var(--shadow); border: 1px solid var(--border-color); transition: all 0.3s ease;">
            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.5rem;">
              📅
            </div>
            <div>
              <h3 style="font-size: 1.875rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem;">{{ acara.length }}</h3>
              <p style="color: #64748b; font-weight: 500;">Total Acara</p>
            </div>
          </div>
          <div style="background: white; border-radius: 1rem; padding: 1.5rem; text-align: center; box-shadow: var(--shadow); border: 1px solid var(--border-color); transition: all 0.3s ease;">
            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.5rem;">
              📍
            </div>
            <div>
              <h3 style="font-size: 1.875rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem;">6</h3>
              <p style="color: #64748b; font-weight: 500;">Lokasi Berbeda</p>
            </div>
          </div>
          <div style="background: white; border-radius: 1rem; padding: 1.5rem; text-align: center; box-shadow: var(--shadow); border: 1px solid var(--border-color); transition: all 0.3s ease;">
            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.5rem;">
              🏷️
            </div>
            <div>
              <h3 style="font-size: 1.875rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem;">5</h3>
              <p style="color: #64748b; font-weight: 500;">Kategori Acara</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Events Grid -->
    <div class="container">
      <div class="grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div
          v-for="item in acara"
          :key="item.id"
          @click="goDetail(item.id)"
          class="card"
          style="cursor: pointer;"
        >
          <!-- Image -->
          <div style="position: relative; height: 224px; overflow: hidden; border-radius: 1rem 1rem 0 0;">
            <img
              :src="item.image"
              :alt="item.title"
              style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;"
            />
            <div style="position: absolute; top: 1rem; left: 1rem;">
              <span style="background: rgba(255, 255, 255, 0.9); color: #1e293b; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 9999px;">
                {{ item.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="card-content">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #1e293b;">
              {{ item.title }}
            </h2>
            <p style="color: #64748b; margin-bottom: 1rem; line-height: 1.6;">
              {{ item.description }}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #e2e8f0; margin-top: 1rem;">
              <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem; color: #64748b;">
                <div style="display: flex; align-items: center;">
                  <span style="margin-right: 0.25rem;">📍</span>
                  <span>{{ item.location }}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="margin-right: 0.25rem;">📅</span>
                  <span>{{ item.date }}</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; color: #4f46e5; font-weight: 600; font-size: 0.875rem;">
                <span>Detail</span>
                <svg style="margin-left: 0.5rem; width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>