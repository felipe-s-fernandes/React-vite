import { useState } from "react"
import styled from "styled-components"
import Modal from "../hooks/useModal"
import NavigationBar from "../components/NavigationBar"
import { Navigate } from "react-router-dom"
import SignUpForm from "../components/SignUpForm"

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function SignUpPage() {

    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })

    const [registered, setRegistered] = useState<boolean>(false)

    async function formSubmitted(name: string, email: string, password: string) {
        try {
            const response = await fetch(`http://localhost:8000/accounts/`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            if (response.ok) {  
                const createdUser = await response.json()
                console.log(createdUser.data)
                setRegistered(true)
            } else {
                setModalState({
                    open: true,
                    message: "Erro ao criar usuário"
                })
            }
        } catch (error) {
            setModalState({
                open: true,
                message: "Erro ao criar usuário"
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
            registered ? <Navigate to="/login" /> :
            <>
            <h1>Página de cadastro</h1>
            <NavigationBar links={[
                {
                    route: "/login",
                    content: "Login"
                }]
            } />        
            <Wrapper>
                {modal.open && <Modal close={closeModal} message={modal.message} />}
                <SignUpForm onSubmit={formSubmitted} />
            </Wrapper>
            </>
        }
    </>
}