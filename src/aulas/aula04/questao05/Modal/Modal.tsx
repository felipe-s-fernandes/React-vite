import './Modal.css'

interface ModalProps {
    close: () => void;
}

export default function Modal({close}: ModalProps) {
    

    function stopPropagation(event: React.MouseEvent) {
        event.stopPropagation();
    }

    return (
        <div className="modal-background" onClick={close} >
            <div className="modal-content" onClick={(event) => stopPropagation(event)} >Form enviado com sucesso!</div>
        </div>
    )
}