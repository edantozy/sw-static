import { Button, Checkbox, Container, Divider, FormElement, Input, Spacer, Text } from '@nextui-org/react'
import React, { ChangeEvent, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { SearchContext } from '../../context/search'
import { Character } from '../../interfaces'
import { SearchFormModal } from './SearchFormModal'

interface Props {
  initialCharacters: Character[],
  setCharacters: Dispatch<SetStateAction<Character[]>>
}

export const SearchForm: FC<Props> = ({ initialCharacters, setCharacters }) => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedFilms, setSelectedFilms] = useState([] as string[])

  const onSelectFilms = (value: string[]) => {
    setSearchValue('')
    setSelectedFilms(value)
    setCharacters(initialCharacters.filter(el => {
      for (let i = 0; i < el.films.length; i++) {
        if (value.includes(el.films[i].replaceAll(' ', '-'))) {
          return true
        }
      }
    }))
    if (value.length === 0) setCharacters(initialCharacters)
  }

  const onInputChange = (e: ChangeEvent<FormElement>) => {
    setSelectedFilms([])
    setSearchValue(e.target.value)
    if (e.target.value.length === 0) setCharacters(initialCharacters)

    setCharacters(initialCharacters.filter(el => {
      return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }
  return (
    <SearchFormModal title="Find a character">
      <Container>
        <Input css={{ width: '100%', margin: '1rem 0' }} type="text" aria-label="Character" value={searchValue} onChange={onInputChange} placeholder="Search a character" rounded bordered />
        <Button size="xs" bordered color="secondary" onPress={() => { setSelectedFilms([]); setSearchValue(''); setCharacters(initialCharacters) }}>Clear all</Button>
        <Divider css={{margin: '1rem 0'}} />
        <Checkbox.Group
          label="Select film"
          orientation="vertical"
          color="secondary"
          value={selectedFilms}
          onChange={onSelectFilms}
          css={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Checkbox value="A-New-Hope">A New Hope</Checkbox>
          <Checkbox value="The-Empire-Strikes-Back">The Empire Strikes Back</Checkbox>
          <Checkbox value="Return-of-the-Jedi">Return of the Jedi</Checkbox>
          <Checkbox value="The-Phantom-Menace">The Phantom Menace</Checkbox>
          <Checkbox value="Attack-of-the-Clones">Attack of the Clones</Checkbox>
          <Checkbox value="Revenge-of-the-Sith">Revenge of the Sith</Checkbox>
        </Checkbox.Group>
        <Spacer y={2.5} />
      </Container>
    </SearchFormModal>
  )
}
