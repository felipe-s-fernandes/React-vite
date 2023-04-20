import './Modal.css'

interface ModalProps {
    close: () => void;
    message: string;
}

export default function Modal(props: ModalProps) {
    
    function stopPropagation(event: React.MouseEvent) {
        event.stopPropagation();
    }

    return (
        <div className="modal-background" onClick={props.close} >
            <div className="modal-content" onClick={(event) => stopPropagation(event)} >{props.message}</div>
        </div>
    )
}