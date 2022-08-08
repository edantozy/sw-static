import { swAPI } from "../apis/"
import { CharacterList } from "../interfaces"

export const getCharacterList = async (page: string | number) => {
    try {
        const { data } = await swAPI.get<CharacterList>(`/people/?page=${page}`)

        return {
            count: data.count,
            next: data.next,
            previous: data.previous,
            results: data.results,
        }
    } catch {
        return null
    }
}