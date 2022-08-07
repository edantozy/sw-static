import { swAPI } from "../apis/"
import { Character } from "../interfaces"

export const getCharacterNameById = async (id: string) => {
    try {
        const { data } = await swAPI.get<Character>(`/people/${id}`)

        return data.name
        
    } catch {
        return ''
    }
}