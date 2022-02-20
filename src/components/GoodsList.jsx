import {GoodsItem} from './GoodsItem'

function GoodsList(props) {
    const {goods =[], addToBasket = Function.prototype} = props
    if(!goods.length) {
        return <h3>Nothing here</h3>
    }
    
    return <div className='goods-list'>
        {goods.map((good) => {
            return <GoodsItem key={good.id} addToBasket={addToBasket} {...good}/>
        } )}
    </div>
}

export {GoodsList}