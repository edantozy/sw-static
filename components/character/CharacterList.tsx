import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Container, Grid, Pagination } from '@nextui-org/react'
import { Character } from '../../interfaces'
import { CharacterCard } from './CharacterCard'

interface Props {
  initialCharacters: Character[],
  charactersList: Character[],
  setCharactersList: Dispatch<SetStateAction<Character[]>>
}

export const CharacterList: FC<Props> = ({ initialCharacters, charactersList, setCharactersList }) => {
  const [page, setPage] = useState(1),
    perPage = 10,
    totalPages = Math.ceil(initialCharacters.length / perPage)

  useEffect(() => {
    setCharactersList(initialCharacters.slice((page * perPage - perPage), (page * perPage)))
  }, [page, setCharactersList, initialCharacters])

  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {
          charactersList.map((character, i) => (
            <CharacterCard
              homeworld={character.homeworld}
              name={character.name}
              href={`/character/${character.name.replaceAll(' ', '-')}`}
              key={i}
            />
          ))
        }
      </Grid.Container>
      <Container display="flex" justify="center" css={{ margin: '1.5rem' }}>
        <Pagination css={{ margin: 'auto' }} total={totalPages} initialPage={page} onChange={(page) => setPage(page)} />
      </Container>
    </>
  )
}
