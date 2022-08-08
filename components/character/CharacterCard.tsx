import React, { FC } from 'react'
import NextLink from 'next/link'
import { Grid, Card, Row, Divider, Text, Link } from '@nextui-org/react'

interface Props {
    name: string,
    homeworld: string,
    href: string
}

export const CharacterCard: FC<Props> = ({ name, homeworld, href }) => {
    return (
        <Grid xs={12} sm={4} md={3} lg={2.4}>
            <Card isHoverable variant="bordered">
                <Card.Header>
                    <Row justify="space-between">
                        <Text h3 color="warning">{name}</Text>
                    </Row>
                </Card.Header>
                <Divider />
                <Card.Body>
                    <Row justify="space-between">
                        <Text>Homeworld: <strong>{homeworld}</strong></Text>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <NextLink href={href} passHref>
                            <Link>
                                More information
                            </Link>
                        </NextLink>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
