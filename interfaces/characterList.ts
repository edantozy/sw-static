import { Character } from "./characterInfo";

export interface CharacterList {
  count: number,
  next: string,
  previous: string,
  results: Character[]
}