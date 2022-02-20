

function BasketItem(props) {
    const {id,name, price, quantity, removeFromBasket, handleQuantityChange} = props

    return(
        <li  className="collection-item">
            {name} <span className="item-button" onClick={() => handleQuantityChange(id, -1)}>-</span> x{quantity} <span className="item-button" onClick={() => handleQuantityChange(id, 1)}>+</span> = {price*quantity}
            <span className="secondary-content">
                <i className="material-icons basket-delete"
                onClick={() => removeFromBasket(id)}>close</i>
            </span>
        </li>
        
    )
}

export {BasketItem}