import { Character } from "./characterInfo"

export interface CharactersSearchResult {
    count: number,
    next: string,
    previous: null,
    results: Character[]
}
