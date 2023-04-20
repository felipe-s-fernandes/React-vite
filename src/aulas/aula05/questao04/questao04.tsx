import { useEffect, useState } from "react";

interface ICart {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number, count: number };
    title: string;
}

export default function Cart() {
    alert("Início da renderização do componente Cart")

    const [cart, updateCart] = useState<ICart[]>([])

    useEffect(() => {
        async function getCart() {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=5");
                const cartItems: ICart[] = await response.json();
                updateCart(cartItems);
            } catch (error) {
                console.error(error);
            }
        }
        getCart();
    }, cart)

    console.log(cart)

    const balance = 30;

    function notEnoughBalance(): boolean {
        let sum = 0;
        cart.forEach(item => sum += item.price)
        if (sum > balance) return true
        return false
    }

    function removeItem(id:number):void {
        const updatedCart = cart.filter((item) => item.id !== id)
        updateCart(updatedCart)
        alert(`O produto com id ${id} será removido`)
    }

    return (
        <div className="cart-container">
            <h1>Meu carrinho</h1>
            {notEnoughBalance() ? <p>Saldo insuficiente</p> : null}
            <ul>
                {cart.map( item => <li>{item.title} <button onClick={() => removeItem(item.id)}>remover</button></li>)}
            </ul>
        </div>
    )
}