import { useState } from "react";
import styled from "styled-components"

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index : 999;
    `
const Content = styled.div`
    padding: 40px;
    border-radius: 10px;
    background-color: white;
    z-index : 1000;
    `

interface ModalProps {
    isOpen: boolean;
    message: string;
}

export default function useModal(): [() => JSX.Element, (message: string) => void] {
    const [modalState, setModalState] = useState<ModalProps>({
        isOpen: false,
        message: "",
    })

    function openModal(message: string): void {
        setModalState({
            isOpen: true,
            message: message,
        })
    }
    
    function EasyModal() {
        function closeModal(): void {
            setModalState({
                isOpen: false,
                message: "",
            })
        }
        
        function stopPropagation(event: React.MouseEvent) {
            event.stopPropagation();
        }
    
        if (modalState.isOpen) {
            return (
                <Background onClick={closeModal} >
                    <Content onClick={(event) => stopPropagation(event)} >{modalState.message}</Content>
                </Background>
            )
        } else {
            return <></>
        }
    }

    return [EasyModal, openModal]
}

