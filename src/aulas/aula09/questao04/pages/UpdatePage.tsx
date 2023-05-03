import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../context/UserContext"
import Form from "../components/LoginForm"
import NavigationBar from "../components/NavigationBar"
import { Navigate } from "react-router-dom"
import useModal from "../hooks/useModal"

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function UpdatePage() {

    const context = useContext(UserContext)
    const [EasyModal, openModal]: [() => JSX.Element, (message: string) => void] = useModal()
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
                openModal("Erro ao atualizar usuário")
            }
        } catch (error) {
            openModal("Erro ao atualizar usuário")
        }

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
                <EasyModal />
                <Form onSubmit={formSubmitted} />
            </Wrapper>
            </>
        }
    </>
}