import { useState } from "react";

interface FormProps {
    onSubmit: (username: string, password: string) => void;
}

function Form({onSubmit} : FormProps) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    return (
        <div className="login-form">  
            <div className="input-box">
                <label htmlFor="username">Usuário:</label>
                <input type="text" name="username" value={username} onChange={usernameChange} />
            </div>
            <div className="input-box">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" value={password} onChange={passwordChange}/>
            </div>
            <button onClick={() => onSubmit(username, password)} >Enviar</button>
        </div>
    )
}

export default Form;