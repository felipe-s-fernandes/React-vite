import { createContext } from "react";
import IUser from "../interfaces/iUser";

interface IUserContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

const UserContext = createContext<IUserContext>({} as IUserContext)

export default UserContext