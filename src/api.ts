import axios from 'axios'

export interface DataList {
  id: number
  image: string
  title: string
  description: string
  text: string
  detail: string
}

export interface CurrentData {
  id: number
  image: string
  title: string
  genre: string[]
  production: {
    year: string
    country: string
  }
  labels: {
    fullhd: boolean
    subtitles: boolean
    age_restrictions: string
  }
}

export interface Comment {
  comments: [
    { id: number; author: string; description?: string; comment: string },
  ]
}

const API = 'https://fe-dev-offer-api.1tv.ru'

export const getListVideo = async (): Promise<DataList[]> => {
  try {
    const res = await axios.get<DataList[]>(`http://localhost:3000/list`)
    return res.data
  } catch (error) {
    console.error('ОШибка получения списка роликов', error)
    return []
  }
}

export const getCurrentVideo = async (id: number)  => {
  try {
    const res = await axios.get<CurrentData[]>(
      `http://localhost:3000/items/?id=${id}`,
    )
    return res.data[0]
  } catch (error) {
    console.error('ОШибка получения списка роликов', error)
    return {
      genre: [],
      id: 0,
      image: '',
      labels: { age_restrictions: '', fullhd: false, subtitles: false },
      production: { country: '', year: '' },
      title: '',
    }
  }
}

export const getListComment = async (id: number): Promise<Comment> => {
  try {
    const res = await axios.get<Comment[]>(
      `http://localhost:3000/comments/?id=${id}`,
    )
    return res.data[0]
  } catch (error) {
    console.error('ОШибка ', error)
    return {
      comments: [
        {
          id: 0,
          author: '',
          description: '',
          comment: '',
        },
      ],
    }
  }
}

export const createComment = async (
  id: number,
  data: {
    id?: number
    author: string
    description?: string
    comment: string
  },
) => {
  try {
    const res = await axios.post<Comment>(`http://localhost:3000/comments`, {
      pid: id,
      ...data,
    })
    return res.data
  } catch (error) {
    console.error('Ошибка при добавлении комментария', error)
  }
}
