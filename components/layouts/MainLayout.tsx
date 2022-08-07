import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
    children: React.ReactNode,
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title = "SW App" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Erick Torres" />
            </Head>
            <Navbar />
            <main style={{
                padding: '1rem'
            }}>
                {children}
            </main>
        </>
    )
}
