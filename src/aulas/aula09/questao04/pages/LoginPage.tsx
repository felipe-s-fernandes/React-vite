import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import IUser from "../interfaces/iUser";
import UserContext from "../context/UserContext";
import NavigationBar from "../components/NavigationBar";
import useModal from "../hooks/useModal";

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function LoginPage() {

    const [EasyModal, openModal]: [() => JSX.Element, (message: string) => void] = useModal()

    const context = useContext(UserContext)
    useEffect(() => {
        context.user && context.setUser(null)
    }, [])


    async function login(user: IUser) {
        context.setUser(user);
    }

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
                login(userData.data);
            } else {
                openModal("Erro no login")
            }
        } catch (error) {
            openModal("Erro no login")
        }

    }

    return (
        <>
        {context.user ? <Navigate to="/home" /> :
            <>
            <h1>Página de login</h1>
            <NavigationBar links={[{
                route: "/register",
                content: "Cadastre-se"
            }]} />
            <Wrapper>
                <EasyModal />
                <LoginForm onSubmit={formSubmitted} />
            </Wrapper>
            </>
        }
        </>
    )
}

