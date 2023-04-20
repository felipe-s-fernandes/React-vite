export default function App() {
    const cart = [
        { id: 20113, name: "sabonete", price: 3 },
        { id: 1214, name: "creme dental", price: 10 },
        { id: 55543, name: "espelho", price: 15 },
        { id: 112, name: "torneira", price: 5 },
    ]
    const balance = 30;
    
    // seu código daqui para baixo

    return (
        <div className="cart-container">
            <h1>Meu carrinho</h1>
            <ul>
                {cart.map( item => <li>{item.name}</li>)}
            </ul>
        </div>
    )

    // seu código daqui para cima
}