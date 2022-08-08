import { swAPI } from "../apis/"
import { Planet } from "../interfaces"

export const getPlanetNameById = async (id: string) => {
    try {
        const { data } = await swAPI.get<Planet>(`/planets/${id}`)
        return data.name
    } catch {
        return ''
    }
}