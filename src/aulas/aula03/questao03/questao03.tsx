export default function App() {
    const cart = [
        { id: 20113, name: "sabonete", price: 3 },
        { id: 1214, name: "creme dental", price: 10 },
        { id: 55543, name: "espelho", price: 15 },
        { id: 112, name: "torneira", price: 5 },
    ]
    const balance = 30;

    function notEnoughBalance(): boolean {
        let sum = 0;
        cart.forEach(item => sum += item.price)
        if (sum > balance) return true
        return false
    }

    return (
        <div className="cart-container">
            <h1>Meu carrinho</h1>
            {notEnoughBalance() ? <p>Saldo insuficiente</p> : null}
            <ul>
                {cart.map( item => <li>{item.name}</li>)}
            </ul>
        </div>
    )
}