import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Card, Container, Divider, Grid, Text } from '@nextui-org/react'
import { MainLayout } from '../../components/layouts'
import { findCharacters, getCharacterNameById } from '../../utils'
import { Character } from '../../interfaces'

interface Props {
    character: Character
}

const CharacterPage: FC<Props> = ({ character }) => {
    return (
        <MainLayout>
            <Card css={{ maxWidth: '1400px', margin: 'auto' }}>
                <Card.Header css={{ display: 'flex', justifyContent: 'center' }}>
                    <Text h1 transform="capitalize">{character.name}</Text>
                </Card.Header>
                <Divider />
                <Card.Body css={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <Text css={{ textAlign: 'center' }} size={30}>Homeworld:</Text>
                        <Text css={{ textAlign: 'center' }} transform="capitalize">{character.homeworld}</Text>
                    </Container>
                    <Container>
                        <Text css={{ textAlign: 'center' }} size={30}>Birth Year:</Text>
                        <Text css={{ textAlign: 'center' }} transform="capitalize">{character.birth_year}</Text>
                    </Container>
                    <Container>
                        <Text css={{ textAlign: 'center' }} size={30}>Gender:</Text>
                        <Text css={{ textAlign: 'center' }} transform="capitalize">{character.gender}</Text>
                    </Container>
                    <Container>
                        <Text css={{ textAlign: 'center' }} size={30}>Eyes Color:</Text>
                        <Text css={{ textAlign: 'center' }} transform="capitalize">{character.eye_color}</Text>
                    </Container>
                    <Container>
                        <Text css={{ textAlign: 'center' }} size={30}>Hair Color:</Text>
                        <Text css={{ textAlign: 'center' }} transform="capitalize">{character.hair_color}</Text>
                    </Container>
                    <Divider />
                    <Container>
                        <Text css={{ textAlign: 'center' }} h3>Films where the character appears:</Text>
                        <Grid.Container gap={2} justify="flex-start">
                            {
                                character.films.map((el) => {
                                    return <div key={el}>{el}</div>
                                })
                            }
                        </Grid.Container>
                    </Container>
                </Card.Body>
            </Card>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const allCharacters: string[] = [...Array(83)].map((value, index) => {
        return `${index + 1}`
    })

    let names = await Promise.all(
        [...Array(83)].map(async (value, index) => {
            return getCharacterNameById(`${index}`).then(name => name)
        })
    )

    names = names.filter(el => el !== '')

    return {
        paths:
            names.map(name => {
                return {
                    params: { name: name.replaceAll(' ', '-') }
                }
            })
        ,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }

    const res = await findCharacters(name.replaceAll('-', ' '))

    if (!res) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            character: res.results[0]
        }
    }
}

export default CharacterPage