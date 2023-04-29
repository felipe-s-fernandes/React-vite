import { useContext, useEffect, useState } from "react"
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import UserContext from "./context/UserContext";
import IUser from "./interfaces/iUser";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

export default function App() {

    const [user, setUser] = useState<IUser | null>(null)
    
    
    function RootRoute() {
        const context = useContext(UserContext)
        const navigate = useNavigate();
        useEffect(() => {
            context.user ? navigate("/home") : navigate("/login") 
        }, [])
        
        return <></>
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootRoute />
        },
        {
            path: "/home",
            element: <HomePage/>
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/register",
            element: <SignUpPage />
        },
        {
            path: "/update",
            element: <UpdatePage />
        }
        
    ])

    return <>
        <UserContext.Provider value={{user, setUser}}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    </>
}