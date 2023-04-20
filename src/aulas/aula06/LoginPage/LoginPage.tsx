import { useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import HomePage from "../HomePage/HomePage";
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function LoginPage() {
    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })
    const [loggedIn, setLoggedIn] = useState(false) 

    async function formSubmitted(username: string, password: string) {

        console.log(username, password)
        
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            if (response.ok) {
                setLoggedIn(true);
            } else {
                const json = await response.json()
                setModalState({
                    open: true,
                    message: json.errors[0]
                })
            }
        } catch (error) {
            setModalState({
                open: true,
                message: `${error}`
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
            {
                loggedIn ? (
                    <HomePage />
                ) : (
                    <Wrapper>
                        {modal.open && <Modal close={closeModal} message={modal.message} />}
                        <h1>Página de login</h1>
                        <Form onSubmit={formSubmitted} />
                    </Wrapper>
                )
            }
        </>
    )
}

export default LoginPage;

