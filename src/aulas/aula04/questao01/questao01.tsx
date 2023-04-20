import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);

    function addContador() {
        setContador(contador + 1);
    }

    function subtractContador() {
        setContador(contador - 1);
    }

    return (
        <div className="contador-container">
            <p>{contador}</p>
            <button onClick={addContador} >+</button>
            <button onClick={subtractContador} >-</button>
        </div>
    )

}