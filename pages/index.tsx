import type { NextPage } from 'next'
import { CharacterList } from '../components/character'
import { MainLayout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <CharacterList></CharacterList>
    </MainLayout>
  )
}

export default HomePage
