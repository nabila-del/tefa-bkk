export interface Acara {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
}

export const useAcara = () => {
  const acara = ref<Acara[]>([
    {
      id: 1,
      title: 'Job Fair BKK',
      date: '2026-03-10',
      location: 'Bandung',
      description: 'Pameran lowongan kerja untuk siswa dan alumni.',
      image: 'https://source.unsplash.com/600x400/?event'
    },
    {
      id: 2,
      title: 'Seminar Karir',
      date: '2026-04-01',
      location: 'Jakarta',
      description: 'Seminar persiapan dunia kerja.',
      image: 'https://source.unsplash.com/600x400/?seminar'
    }
  ])

  const getAcaraById = (id: number) => {
    return acara.value.find(a => a.id === id)
  }

  return { acara, getAcaraById }
}