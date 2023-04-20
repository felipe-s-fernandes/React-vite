import { useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

function LoginPage() {
    const [modalState, setModalState] = useState(false)

     
    function formSubmitted() {
        setModalState(true)
    }

    function closeModal(): void {
        setModalState(false)
    }

    return (
        <>
            {modalState && <Modal close={closeModal} />}
            <h1>Página de login</h1>
            <Form onSubmit={formSubmitted} />
        </>
    )
}

export default LoginPage;

