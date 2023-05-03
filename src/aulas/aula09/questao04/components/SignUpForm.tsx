import { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components"

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
`

const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

interface SignUpFormProps {
    onSubmit: (username: string, email: string, password: string) => void;
}

function SignUpForm({onSubmit} : SignUpFormProps) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function emailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    return (
        <LoginBox>  
            <InputBox>
                <label htmlFor="username">Usuário:</label>
                <input type="text" name="username" value={username} onChange={usernameChange} />
            </InputBox>
            <InputBox>
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" value={email} onChange={emailChange} />
            </InputBox>
            <InputBox>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" value={password} onChange={passwordChange}/>
            </InputBox>
            <Button variant="contained" onClick={() => onSubmit(username, email, password)} >Enviar</Button>
        </LoginBox>
    )
}

export default SignUpForm;