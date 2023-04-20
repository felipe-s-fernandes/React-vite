import { useState } from "react";
import "./Contador.css"

interface ContadorProps {
    onRemove: () => void;
}

export default function Contador({ onRemove }: ContadorProps) {
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
            <button onClick={addContador}>+</button>
            <button onClick={subtractContador}>-</button>
            <button onClick={onRemove}>Remover</button>
        </div>
    )

}