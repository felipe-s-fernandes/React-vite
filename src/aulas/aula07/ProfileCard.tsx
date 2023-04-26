import { useContext } from "react"
import styled from "styled-components"
import UserContext from "./context/UserContext"

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

export default function ProfileCard() {
    const context = useContext(UserContext)

    console.log(context)

    return <>
        <Wrapper>
            <h3>Perfil</h3>
            <p>{context.user?.email}</p>
        </Wrapper>
    </>
}