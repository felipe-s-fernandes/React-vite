import styled from "styled-components"

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
`
const Content = styled.div`
    padding: 40px;
    border-radius: 10px;
    background-color: white;
`

interface ModalProps {
    close: () => void;
    message: string;
}

export default function Modal(props: ModalProps) {
    
    function stopPropagation(event: React.MouseEvent) {
        event.stopPropagation();
    }

    return (
        <Background onClick={props.close} >
            <Content onClick={(event) => stopPropagation(event)} >{props.message}</Content>
        </Background>
    )
}