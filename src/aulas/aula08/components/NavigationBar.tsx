import styled from "styled-components"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Wrapper = styled.nav`
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    width: 250px;
`

interface NavigationBarProps {
    links: Array<{
        route: string;
        content: string;
    }>;
}

export default function NavigationBar({links}: NavigationBarProps) {

    return(
        <>
            <Wrapper>
                {links.map((link) => <Link to={link.route} key={link.content} ><Button>{link.content}</Button></Link>)}
            </Wrapper>
        </>
    )
}