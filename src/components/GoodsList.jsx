import { useContext } from 'react'
import { ShopContext } from '../context'
import {GoodsItem} from './GoodsItem'

function GoodsList() {
    const {goods =[]} = useContext(ShopContext)
    
    if(!goods.length) {
        return <h3>Nothing here</h3>
    }
    
    return <div className='goods-list'>
        {goods.map((good) => {
            return <GoodsItem key={good.id} {...good}/>
        } )}
    </div>
}

export {GoodsList}