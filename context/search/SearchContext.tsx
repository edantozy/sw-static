import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

export interface ContextProps {
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>
}

export const SearchContext = createContext({} as ContextProps)

interface Props { children: React.ReactNode }

export const SearchContextProvider: FC<Props> = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SearchContext.Provider
            value={{
                modalVisible,
                setModalVisible
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}