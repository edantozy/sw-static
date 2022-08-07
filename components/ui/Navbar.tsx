import { Image, Spacer, Text, useTheme } from '@nextui-org/react'
import React from 'react'
import { SearchButton } from '../search'

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
            <Text color="white" h2 css={{ marginLeft: '0.7rem' }}>SW</Text>
            <Text color="white" h3 css={{ marginRight: '0.7rem' }}>App</Text>
            <SearchButton />
            <Spacer css={{ flex: 1 }} />
        </div>
    )
}
