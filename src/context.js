import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods:[],
    loading: true,
    order: [],
    isBasketShown: false,
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] =useReducer(reducer, initialState)

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    value.BasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET' })
    }
    
    value.handleQuantityChange = (itemId, digit) => {
        dispatch({type: 'HANDLE_QUANTITY_CHANGE', payload:{id: itemId, digit}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload:{item}})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload:data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}