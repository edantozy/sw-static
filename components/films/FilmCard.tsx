import React, { FC } from 'react'
import { Card, Divider, Grid, Text } from '@nextui-org/react'
import { Film } from '../../interfaces'

interface Props {
    film: Film
}

export const FilmCard: FC<Props> = ({ film }) => {
    const handleCrawl = () => {
        console.log(film.opening_crawl)
    }
    return (
        <Grid xs={12} sm={4} md={3}>
            <Card
                isHoverable
                isPressable
                onPress={handleCrawl}
                variant="bordered"
            >
                <Card.Header>
                    <Text h4 color="success">{film.title}</Text>
                </Card.Header>
                <Divider />
                <Card.Body>
                    <Text>Directed by <strong>{film.director}</strong></Text>
                    <Text>Produced by <strong>{film.producer}</strong></Text>
                </Card.Body>
            </Card>
        </Grid>
    )
}
