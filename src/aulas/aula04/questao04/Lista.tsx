import { useState } from "react";
import Contador from "./Contador";
import "./Lista.css"

export default function Lista() {
    const [lista, setLista] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
    ])

    function removeContador(id: number) {
        const newLista = lista.filter((item) => item.id !== id)
        setLista(newLista)
    }

    return (
        <div className="lista-container">    
            {lista.map((item) => <Contador onRemove={() => removeContador(item.id)} key={item.id}/>)}
        </div>
    )
}

