import { useReducer } from "react"
import CartContext from "./cartContext"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }

        default:
            return defaultCartState
    }

}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    //  console.log('cartState', cartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            item: id
        })
    }

    const CartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={CartContextHelper}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider