import { BasketItem } from "./BasketItem"


function BasketList(props) {
    const {order = [], handleBasketShown = Function.prototype, removeFromBasket, handleQuantityChange} = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + (el.price * el.quantity)
    }, 0)

    return (
        <ul className="collection basket-list">
            <li  className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => {
                    return <BasketItem key={item.id} removeFromBasket={removeFromBasket} handleQuantityChange={handleQuantityChange} {...item}/>
                }) : <li className="colletion-item">Корзина пуста</li>
            }        
            <li  className="collection-item active">Общая стоимость: {totalPrice} </li>
            <i className="material-icons basket-close" onClick={handleBasketShown}>close</i>
      </ul>
    )
}

export {BasketList}