import { Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { Character } from '../interfaces'
import { CharacterList } from '../components/character'
import { MainLayout } from '../components/layouts'
import { getCharacterList } from '../utils'

interface Props {
  characters: Character[]
}

const HomePage: NextPage<Props> = ({ characters }) => {
  return (
    <MainLayout>
      <Text h1 css={{ textAlign: 'center' }}>Star Wars Characters</Text>
      <CharacterList characters={characters} />
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
    characters = characters.concat(res!.results)
    next = res.next
    i++
  }

  return {
    props: { characters }
  }
}

export default HomePage
