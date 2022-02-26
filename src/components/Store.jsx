import { useEffect, useContext } from "react"

import { GoodsList } from "./GoodsList"
import { Preloader } from "./Preloader"
import { BasketList } from "./BasketList"
import { Cart } from "./Cart"
import { ShopContext } from "../context"

import {API_KEY} from '../config.js'
import {API_URL} from '../config.js'


function Store() {
    const {goods, order, setGoods, loading, isBasketShown} = useContext(ShopContext)
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setGoods(data.featured)
        })
        //eslint-disable-next-line
    },[]);

    
    return <div className="content">
        <Cart quantity={order.length} />
        {loading ? <Preloader/> : <GoodsList goods={goods}/> }
        {isBasketShown && <BasketList order={order}/>}
    </div>
}

export {Store}