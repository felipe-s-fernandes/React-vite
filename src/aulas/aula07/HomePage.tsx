import { useContext } from "react"
import UserContext from "./context/UserContext"
import ProfileCard from "./ProfileCard"
import UpdateCard from "./UpdateCard"


export default function HomePage() {

    return(
        <>
            <h1>Home: sua página logada</h1>
            <ProfileCard/>
            <UpdateCard/>
        </>
    )
}