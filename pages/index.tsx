import { Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { CharacterList } from '../components/character'
import { MainLayout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Text h1 css={{textAlign: 'center'}}>Star Wars Characters</Text>
      <CharacterList></CharacterList>
    </MainLayout>
  )
}

export default HomePage
