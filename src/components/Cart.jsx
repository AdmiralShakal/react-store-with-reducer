function Cart(props) {
    const {quantity = 0, handleBasketShown = Function.prototype} = props

    return (<div 
    className="cart blue darken-4 white-text"
    onClick={handleBasketShown}>
        <i className="material-icons">shopping_cart</i>
        {props.quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>)
}

export {Cart}