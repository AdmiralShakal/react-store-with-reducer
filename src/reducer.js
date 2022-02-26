

export function reducer(state, {type,payload}) {

    const quantityChange = (itemId,digit) => {
        const newOrder = state.order.map(orderItem => {
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
        return newOrder
    }

    const addItem = (item) => {
        const itemIndex = state.order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            return([...state.order, newItem]);
        } else {
            const newOrder = state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            return(newOrder);
        }
    };

    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShown: !state.isBasketShown,
            }
        case 'HANDLE_QUANTITY_CHANGE':
            return {
                ...state,
                order: quantityChange(payload.id,payload.digit)
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                order: addItem(payload.item)
            }
        default:
            return state;
    }
}