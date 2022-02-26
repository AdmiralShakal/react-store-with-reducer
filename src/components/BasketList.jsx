import { BasketItem } from "./BasketItem"
import { useContext } from 'react'
import { ShopContext } from '../context'


function BasketList() {
    const {order = [], BasketShow} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + (el.price * el.quantity)
    }, 0)

    return (
        <ul className="collection basket-list">
            <li  className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => {
                    return <BasketItem key={item.id} {...item}/>
                }) : <li className="colletion-item">Корзина пуста</li>
            }        
            <li  className="collection-item active">Общая стоимость: {totalPrice} </li>
            <i className="material-icons basket-close" onClick={BasketShow}>close</i>
      </ul>
    )
}

export {BasketList}