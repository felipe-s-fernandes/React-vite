import { useState } from "react"
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import UserContext from "./context/UserContext";
import IUser from "./interfaces/iUser";

export default function App() {

    const [user, setUser] = useState<IUser | null>(null)

    const [loggedIn, setLoggedIn] = useState(false)
    
    async function setLoginState(loggedUser: IUser) {
        setLoggedIn(true);
        setUser(loggedUser)
    }

    // UserContext

    return <>
        <UserContext.Provider value={{user, setUser}}>
            {loggedIn ? <HomePage /> : <LoginPage onLogin={(user: IUser) => setLoginState(user)} />}
        </UserContext.Provider>
    </>
}