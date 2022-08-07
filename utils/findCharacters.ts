
import { swAPI } from "../apis/"
import { CharactersSearchResult } from "../interfaces"

export const findCharacters = async (search: string) => {
    try {
        const { data } = await swAPI.get<CharactersSearchResult>(`/people/?search=${search}`)

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