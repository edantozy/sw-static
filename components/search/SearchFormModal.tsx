import React, { FC, useContext } from 'react'
import { Modal, Text } from '@nextui-org/react'
import { SearchContext } from '../../context/search'

interface Props {
    title: string,
    children: React.ReactNode
}

export const SearchFormModal: FC<Props> = ({ title, children }) => {
    const { modalVisible, setModalVisible } = useContext(SearchContext)

    const closeHandler = () => {
        setModalVisible(false)
    }
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={modalVisible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    {title}
                </Text>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
