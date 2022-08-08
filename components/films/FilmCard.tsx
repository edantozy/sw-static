import React, { FC } from 'react'
import { Card, Grid, Text } from '@nextui-org/react'
import { Film } from '../../interfaces'

interface Props {
    film: Film
}

export const FilmCard: FC<Props> = ({ film }) => {
    const handleCrawl = () => { }
    return (
        <Grid xs={12} sm={4} md={3}>
            <Card
                isHoverable
                isPressable
                css={{
                    padding: 10,
                }}
                onPress={handleCrawl}
            >
                <Text h4 color="success">{film.title}</Text>
                <Text>Directed by <strong>{film.director}</strong></Text>
                <Text>Produced by <strong>{film.producer}</strong></Text>
            </Card>
        </Grid>
    )
}
