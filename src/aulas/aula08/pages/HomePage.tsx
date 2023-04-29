import ProfileCard from "../components/ProfileCard"
import NavigationBar from "../components/NavigationBar"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import { Navigate } from "react-router-dom"


export default function HomePage() {

    const context = useContext(UserContext)

    return(
        <>
        {
            !context.user ? <Navigate to="/login" /> :

            <>
            <h1>Home: sua página logada</h1>
            <NavigationBar links={[
                {
                    route: "/update",
                    content: "Atualizar cadastro"
                },
                {
                    route: "/login",
                    content: "Sair"
                }]
            } />        
            <ProfileCard/>
            </>
        }
        </>
    )
}