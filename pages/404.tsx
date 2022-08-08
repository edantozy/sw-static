import { Container, Divider, Link, Text } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { MainLayout } from '../components/layouts'

const NotFoundPage = () => {
    return (
        <MainLayout title="Page not found">
            <Container css={{ display: 'flex', flexDirection: 'column' }}>
                <Text h1 color="warning">404 Page Not Found</Text>
                <Text h2>This is the way to the dark side</Text>
                <Divider css={{ margin: '2rem 0' }} />
                <Image src="/img/darth-vader.svg" alt="Darth Vader Image" width={100} height={100} />
                <NextLink href="/" passHref>
                    <Link>
                        <Text h3 color="primary" css={{ textAlign: 'center', margin: '2rem auto' }}>
                            Back to the light
                        </Text>
                    </Link>
                </NextLink>
            </Container>
        </MainLayout>
    )
}

export default NotFoundPage