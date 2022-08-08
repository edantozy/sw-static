import React, { FC } from 'react'
import { Container, Pagination, Table } from '@nextui-org/react'
import { Character } from '../../interfaces'
import NextLink from 'next/link'

interface Props {
  characters: Character[]
}

export const CharacterList: FC<Props> = ({ characters }) => {
  return (
    <>
      <Table
        css={{
          height: "auto",
          minWidth: "100%"
        }}
        aria-label="Character List"
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>HOME-WORLD</Table.Column>
          <Table.Column>ACTIONS</Table.Column>
        </Table.Header>
        <Table.Body>
          {
            characters.map((character, i) => (
              <Table.Row key={i}>
                <Table.Cell>{character.name}</Table.Cell>
                <Table.Cell>{character.homeworld}</Table.Cell>
                <Table.Cell>
                  <NextLink href={`/character/${character.name.replaceAll(' ', '-')}`} passHref>
                    See details
                  </NextLink>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
      <Container justify="center">
        <Pagination css={{ margin: 'auto' }} total={20} initialPage={1} />
      </Container>
    </>
  )
}
