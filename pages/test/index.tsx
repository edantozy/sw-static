import React, { useEffect } from 'react'
import { swAPI } from "../../apis/"
import { MainLayout } from '../../components/layouts'
import { Character } from "../../interfaces"
import { getCharacterNameById } from '../../utils'

const TestPage = () => {
    useEffect(() => {
        const asyncFunction = async () => {


            const allCharacters: string[] = [...Array(83)].map((value, index) => {
                return `${index + 1}`
            })
        
            let names = await Promise.all(
                allCharacters.map(async id => {
                    return getCharacterNameById(id).then(name => name)
                })
            )
        }
        asyncFunction()
    }, [])

    return (
        <MainLayout>TestPage</MainLayout>
    )
}

export default TestPage