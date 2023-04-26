import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";
import styled from "styled-components"
import IUser from "./interfaces/iUser";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function LoginPage(props: {onLogin: (user: IUser) => void}) {
    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })

    async function formSubmitted(email: string, password: string) {

        console.log(email, password)
        
        try {
            const response = await fetch("http://localhost:8000/accounts/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {
                const userData = await response.json()  
                props.onLogin(userData.data);
            } else {
                setModalState({
                    open: true,
                    message: "Erro no login"
                })
            }
        } catch (error) {
            setModalState({
                open: true,
                message: "Erro no login"
            })
        }

    }

    function closeModal(): void {
        setModalState({
            open: false,
            message: "",
        })
    }

    return (
        <>
            <Wrapper>
                {modal.open && <Modal close={closeModal} message={modal.message} />}
                <h1>Página de login</h1>
                <Form onSubmit={formSubmitted} />
            </Wrapper>
        </>
    )
}

