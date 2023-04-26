import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "./context/UserContext"
import Form from "./Form"
import IUser from "./interfaces/iUser"
import Modal from "./Modal"

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function UpdateCard() {

    const userContext = useContext(UserContext)

    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })

    async function formSubmitted(email: string, password: string) {

        console.log(email, password)
        
        try {
            const response = await fetch(`http://localhost:8000/accounts/`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {  
                const updatedUser = await response.json()
                console.log(updatedUser.data)
                userContext.setUser(updatedUser.data);
            } else {
                setModalState({
                    open: true,
                    message: "Erro ao atualizar usuário"
                })
            }
        } catch (error) {
            setModalState({
                open: true,
                message: "Erro ao atualizar usuário"
            })
        }

    }

    function closeModal(): void {
        setModalState({
            open: false,
            message: "",
        })
    }

    return <>
        <Wrapper>
            {modal.open && <Modal close={closeModal} message={modal.message} />}
            <h3>Atualizar</h3>
            <Form onSubmit={formSubmitted} />
        </Wrapper>
    </>
}