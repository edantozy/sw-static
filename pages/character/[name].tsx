import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Card, Container, Divider, Grid, Text } from '@nextui-org/react'
import { Character, Film } from '../../interfaces'
import { MainLayout } from '../../components/layouts'
import { FilmCard } from '../../components/films'
import { findCharacters, getCharacterNameById, getFilmInfo, getIdFromUrl, getPlanetNameById } from '../../utils'
import { CharacterInfoContainer } from '../../components/character'

interface Props {
    character: Character,
    homeworld: string,
    films: Film[]
}

const CharacterPage: FC<Props> = ({ character, homeworld, films }) => {
    return (
        <MainLayout title={character.name}>
            <Card css={{ maxWidth: '1400px', margin: 'auto' }}>
                <Card.Header>
                    <Container>
                        <Text h1 transform="capitalize" css={{ textAlign: 'center' }} color="warning">{character.name}</Text>
                        <Text color="#787F85" css={{ textAlign: 'center' }}>Last edition: {character.edited}</Text>
                    </Container>
                </Card.Header>
                <Divider />
                <Card.Body>
                    <CharacterInfoContainer title="Birth Year:" text={character.birth_year} />
                    <CharacterInfoContainer title="Homeworld:" text={homeworld} />
                    <CharacterInfoContainer title="Gender:" text={character.gender} />
                    <CharacterInfoContainer title="Eye Color:" text={character.eye_color} />
                    <CharacterInfoContainer title="Hair Color:" text={character.hair_color} />
                </Card.Body>
                <Divider />
                <Card.Footer>
                    <Container>
                        <Text css={{ textAlign: 'center' }} h3>Films where the character appears:</Text>
                        <Grid.Container gap={2} justify="flex-start">
                            {
                                films.map((film) => {
                                    return <FilmCard key={film.title} film={film} />
                                })
                            }
                        </Grid.Container>
                    </Container>
                </Card.Footer>
            </Card>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    let names = await Promise.all(
        [...Array(83)].map(async (value, index) => {
            return getCharacterNameById(`${index}`).then(name => name)
        })
    )

    names = names.filter(el => el !== '')

    return {
        paths:
            names.map(name => {
                return { params: { name: name.replaceAll(' ', '-') } }
            })
        ,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string },
        res = await findCharacters(name.replaceAll('-', ' '))

    if (!res || res.results.length === 0) return { notFound: true }

    const character = res.results[0],
        { films } = character

    let filmsArr = await Promise.all(
        films.map(filmUrl => {
            const id = getIdFromUrl(filmUrl)
            return getFilmInfo(id)
        })
    )

    const planetId = getIdFromUrl(character.homeworld),
        planetName = await getPlanetNameById(planetId)

    return {
        props: {
            character,
            films: filmsArr,
            homeworld: planetName
        },
        revalidate: 86400
    }
}

export default CharacterPage