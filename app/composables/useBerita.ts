import { ref } from 'vue'

export interface Berita {
  id: number
  title: string
  content: string
  date: string
  image: string
  category: string
}

export const useBerita = () => {
  const berita = ref<Berita[]>([
    {
      id: 1,
      title: 'SMK Gelar Job Fair',
      content: 'SMK sukses mengadakan job fair yang dihadiri oleh puluhan perusahaan terkemuka. Siswa dapat langsung berdiskusi dengan HR dan melamar pekerjaan secara langsung.',
      date: '2026-03-01',
      image: 'https://source.unsplash.com/600x400/?jobfair',
      category: 'Karir'
    },
    {
      id: 2,
      title: 'Pelatihan Digital Marketing',
      content: 'Program pelatihan intensif tentang digital marketing, social media campaign, dan pembuatan konten kreatif untuk siswa SMK jurusan multimedia.',
      date: '2026-04-12',
      image: 'https://source.unsplash.com/600x400/?marketing',
      category: 'Pendidikan'
    },
    {
      id: 3,
      title: 'Seminar Kewirausahaan',
      content: 'Seminar ini membahas cara memulai usaha kecil, analisis pasar, dan strategi bisnis bagi generasi muda yang ingin menjadi entrepreneur.',
      date: '2026-05-05',
      image: 'https://source.unsplash.com/600x400/?entrepreneurship',
      category: 'Bisnis'
    }
  ])

  const getBeritaById = (id: number) => {
    return berita.value.find(b => b.id === id)
  }

  return { berita, getBeritaById }
}