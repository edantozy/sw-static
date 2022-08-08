import { swAPI } from "../apis"
import { Film } from "../interfaces"

export const getFilmTitleById = async (id: string | number) => {
    try {
        const { data } = await swAPI.get<Film>(`/films/${id}`)
        return data.title
    } catch {
        return ''
    }
}