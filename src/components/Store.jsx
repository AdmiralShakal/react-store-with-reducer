import {useState, useEffect} from "react"

import { GoodsList } from "./GoodsList"
import { Preloader } from "./Preloader"
import { BasketList } from "./BasketList"
import { Cart } from "./Cart"

import {API_KEY} from '../config.js'
import {API_URL} from '../config.js'


function Store() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShown, setBasketShown] = useState(false)
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            data.featured && setGoods(data.featured);
            setLoading(false)
        })
    },[]);

    const handleBasketShown = () => {
        setBasketShown(!isBasketShown)
    }

    const removeFromBasket = (id) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
    };

    const handleQuantityChange = (itemId, digit) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity + digit
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return orderItem
            }

            
        })
        setOrder(newOrder)
    }
    
    return <div className="content">
        <Cart quantity={order.length} handleBasketShown={handleBasketShown}/>
        {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/> }
        {isBasketShown && <BasketList handleQuantityChange={handleQuantityChange} removeFromBasket={removeFromBasket} order={order} handleBasketShown={handleBasketShown}/>}
    </div>
}

export {Store}