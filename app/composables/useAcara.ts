import { ref } from 'vue'

export interface Acara {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
  category?: string
}

export const useAcara = () => {
  const acara = ref<Acara[]>([
    {
      id: 1,
      title: 'Job Fair BKK',
      date: '2026-03-10',
      location: 'Bandung',
      description: 'Pameran lowongan kerja untuk siswa dan alumni SMK dengan berbagai perusahaan terkemuka.',
      image: 'https://source.unsplash.com/600x400/?event',
      category: 'Karir'
    },
    {
      id: 2,
      title: 'Seminar Karir',
      date: '2026-04-01',
      location: 'Jakarta',
      description: 'Seminar persiapan dunia kerja dengan tips dan trik dari para profesional.',
      image: 'https://source.unsplash.com/600x400/?seminar',
      category: 'Pendidikan'
    },
    {
      id: 3,
      title: 'Workshop Teknologi',
      date: '2026-04-15',
      location: 'Surabaya',
      description: 'Pelatihan praktis tentang teknologi terbaru untuk siswa SMK jurusan teknik.',
      image: 'https://source.unsplash.com/600x400/?technology',
      category: 'Teknologi'
    },
    {
      id: 4,
      title: 'Pelatihan Kewirausahaan',
      date: '2026-05-05',
      location: 'Yogyakarta',
      description: 'Program pengembangan kewirausahaan untuk membangun jiwa entrepreneur.',
      image: 'https://source.unsplash.com/600x400/?business',
      category: 'Bisnis'
    },
    {
      id: 5,
      title: 'Festival Budaya SMK',
      date: '2026-05-20',
      location: 'Medan',
      description: 'Pesta budaya yang menampilkan kreativitas siswa dari berbagai sekolah.',
      image: 'https://source.unsplash.com/600x400/?culture',
      category: 'Budaya'
    },
    {
      id: 6,
      title: 'Kompetisi Coding',
      date: '2026-06-10',
      location: 'Bali',
      description: 'Lomba programming untuk siswa SMK dengan hadiah menarik.',
      image: 'https://source.unsplash.com/600x400/?coding',
      category: 'Teknologi'
    }
  ])

  const getAcaraById = (id: number) => {
    return acara.value.find(a => a.id === id)
  }

  return { acara, getAcaraById }
}