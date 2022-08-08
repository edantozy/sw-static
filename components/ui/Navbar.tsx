import React from 'react'
import { Image, Link, Spacer, Text, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'

export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0 20px',
                backgroundColor: theme!.colors.gray200.value
            }}
        >
            <Image
                src="/img/death-star.svg"
                alt='Death Start Icon'
                width={30}
                height={30}
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2 css={{ marginLeft: '0.7rem' }}>SW</Text>
                    <Text color="white" h3 css={{ marginRight: '0.7rem' }}>App</Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
        </div>
    )
}
