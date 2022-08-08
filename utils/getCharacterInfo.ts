import { swAPI } from "../apis/"
import { Character } from "../interfaces"

export const getPokemonInfo = async (id: string) => {
    try {
        const { data } = await swAPI.get<Character>(`/people/${id}`)

        return {
            name: data.name,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
            homeworld: data.homeworld,
            films: data.films,
            species: data.species,
            vehicles: data.vehicles,
            starships: data.starships,
            created: data.created,
            edited: data.edited,
            url: data.url
        }
    } catch {
        return null
    }
}
