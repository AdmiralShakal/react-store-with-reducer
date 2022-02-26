import { useContext } from 'react'
import { ShopContext } from '../context'

function Cart(props) {
    const {order, BasketShow = Function.prototype} = useContext(ShopContext)

    return (<div 
    className="cart blue darken-4 white-text"
    onClick={BasketShow}>
        <i className="material-icons">shopping_cart</i>
        {props.quantity ? <span className="cart-quantity">{order.length}</span> : null}
    </div>)
}

export {Cart}