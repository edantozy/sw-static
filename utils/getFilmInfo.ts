
import { swAPI } from "../apis/"
import { Film } from "../interfaces"

export const getFilmInfo = async (id: string) => {
    try {
        const { data } = await swAPI.get<Film>(`/films/${id}`)

        return {
            title: data.title,
            director: data.director,
            producer: data.producer,
            opening_crawl: data.opening_crawl,
            release_date: data.release_date
        }
    } catch {
        return null
    }
}