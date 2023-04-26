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

interface FormProps {
    onSubmit: (email: string, password: string) => void;
}

function Form({onSubmit} : FormProps) {

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    return (
        <LoginBox>  
            <InputBox>
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" value={email} onChange={usernameChange} />
            </InputBox>
            <InputBox>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" value={password} onChange={passwordChange}/>
            </InputBox>
            <Button variant="contained" onClick={() => onSubmit(email, password)} >Enviar</Button>
        </LoginBox>
    )
}

export default Form;