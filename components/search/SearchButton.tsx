import React, { useContext } from 'react'
import { Button } from '@nextui-org/react'
import { SearchContext } from '../../context/search'
import { useRouter } from 'next/router'

export const SearchButton = () => {
  const { setModalVisible } = useContext(SearchContext)
  const { replace, basePath } = useRouter()

  const handleClick = () => {
    setModalVisible(true)
    if (basePath) {
      replace('/')
    }
  }

  return (
    <Button
      auto
      bordered
      color="gradient"
      onPress={handleClick}
      rounded
    >
      Search
    </Button>
  )
}
