import React, { useState } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Text } from '@nextui-org/react'
import { Character } from '../interfaces'
import { CharacterList } from '../components/character'
import { MainLayout } from '../components/layouts'
import { getCharacterList, getFilmTitleById, getIdFromUrl, getPlanetNameById } from '../utils'

interface Props {
  initialCharacters: Character[]
}

const HomePage: NextPage<Props> = ({ initialCharacters }) => {
  const [charactersList, setCharactersList] = useState(initialCharacters)
  return (
    <MainLayout>
      <Text h1 css={{ textAlign: 'center' }}>Star Wars Characters</Text>
      <CharacterList
        initialCharacters={initialCharacters}
        charactersList={charactersList}
        setCharactersList={setCharactersList}
      />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let characters: Character[] = []

  let next: null | string = '',
    i = 1

  while (next !== null) {
    const res = await getCharacterList(i)
    if (!res) break
    characters = characters.concat(res.results)
    next = res.next
    i++
  }

  characters = await Promise.all(
    characters.map(async char => {
      const homeworld = await getPlanetNameById(getIdFromUrl(char.homeworld))
      const films = await Promise.all(
        char.films.map(filmUrl => {
          const title = getFilmTitleById(getIdFromUrl(filmUrl))
          return title
        })
      )

      return { ...char, homeworld, films }
    })
  )

  return {
    props: { initialCharacters: characters },
    revalidate: 86400
  }
}

export default React.memo(HomePage) 
