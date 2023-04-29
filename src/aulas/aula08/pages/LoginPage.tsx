import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Modal from "../components/Modal";
import IUser from "../interfaces/iUser";
import UserContext from "../context/UserContext";
import NavigationBar from "../components/NavigationBar";

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function LoginPage() {
    const [modal, setModalState] = useState({
        open: false,
        message: ""
    })

    const context = useContext(UserContext)
    useEffect(() => {
        context.user && context.setUser(null)
    }, [])

    const navigate = useNavigate();

    /* useEffect(() => {
        context.user ? navigate("/home") : navigate("/login") 
    }, [context.user]) */

    async function login(user: IUser) {
        context.setUser(user);
        // navigate("/home")
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
        {context.user ? <Navigate to="/home" /> :
            <>
            <h1>Página de login</h1>
            <NavigationBar links={[{
                route: "/register",
                content: "Cadastre-se"
            }]} />
            <Wrapper>
                {modal.open && <Modal close={closeModal} message={modal.message} />}
                <LoginForm onSubmit={formSubmitted} />
            </Wrapper>
            </>
        }
        </>
    )
}

