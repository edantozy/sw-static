import React, { FC } from 'react'
import { Container, Text } from '@nextui-org/react'

interface Props {
    title: string,
    text: string
}

export const CharacterInfoContainer: FC<Props> = ({ title, text }) => {
    return (
        <Container>
            <Text css={{ textAlign: 'center' }} size={30}>{title}</Text>
            <Text css={{ textAlign: 'center' }} transform="capitalize">{text}</Text>
        </Container>
    )
}
