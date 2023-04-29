import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../context/UserContext"
import Form from "../components/LoginForm"
import Modal from "../components/Modal"
import NavigationBar from "../components/NavigationBar"
import { Navigate } from "react-router-dom"

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function UpdatePage() {

    const context = useContext(UserContext)

    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })

    const [updated, setUpdated] = useState<boolean>(false)

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
                context.setUser(updatedUser.data);
                setUpdated(true)
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
        {
            updated ? <Navigate to="/home" /> :
            <>
            <h1>Atualizar cadastro</h1>
            <NavigationBar links={[
                {
                    route: "/home",
                    content: "Perfil"
                },
                {
                    route: "/login",
                    content: "Sair"
                }]
            } />        
            <Wrapper>
                {modal.open && <Modal close={closeModal} message={modal.message} />}
                <Form onSubmit={formSubmitted} />
            </Wrapper>
            </>
        }
    </>
}