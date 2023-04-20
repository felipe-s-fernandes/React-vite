interface FormProps {
    onSubmit: () => void;
}

function Form({onSubmit} : FormProps) {

    return (
        <div className="login-form">  
            <div className="input-box">
                <label htmlFor="e-mail">E-mail:</label>
                <input type="email" name="e-mail" />
            </div>
            <div className="input-box">
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" />
            </div>
            <button onClick={onSubmit} >Enviar</button>
        </div>
    )
}

export default Form;