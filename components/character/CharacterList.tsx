import React from 'react'
import { Button, Container, Pagination, Table } from '@nextui-org/react'

export const CharacterList = () => {
  return (
    <>
      <Table
        css={{
          height: "auto",
          minWidth: "100%"
        }}
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>HOME-WORLD</Table.Column>
          <Table.Column>ACTIONS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>
              <Button auto color="primary" rounded bordered>See details</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell><Button auto color="primary" rounded bordered>See details</Button></Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Container justify="center">
        <Pagination css={{margin: 'auto'}} total={20} initialPage={1} />
      </Container>
    </>
  )
}
