export interface Berita {
  id: number
  title: string
  content: string
  date: string
  image: string
}

export const useBerita = () => {
  const berita = ref<Berita[]>([
    {
      id: 1,
      title: 'SMK Gelar Job Fair',
      content: 'SMK sukses mengadakan job fair...',
      date: '2026-03-01',
      image: 'https://source.unsplash.com/600x400/?news'
    }
  ])

  const getBeritaById = (id: number) => {
    return berita.value.find(b => b.id === id)
  }

  return { berita, getBeritaById }
}