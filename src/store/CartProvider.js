import { useReducer } from "react"
import CartContext from "./cartContext"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            const existingCartIemIndex = state.items.findIndex(item => item.id === action.item.id)

            const existingCartItem = state.items[existingCartIemIndex]

            let updatedItems;
            if (existingCartItem) {
                const updateditem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartIemIndex] = updateditem
            } else {
                updatedItems = state.items.concat(action.item)
            }

            //  const updatedItems = state.items.concat(action.item)

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        case 'REMOVE':
            const RemoveExistingCartIemIndex = state.items.findIndex(item => item.id === action.id)
            const RemoveExistingItem = state.items[RemoveExistingCartIemIndex]
            // console.log(RemoveExistingItem)
            const RemoveUpdatedTotalAmount = state.totalAmount - RemoveExistingItem.price

            let RemoveUpdatedItems;

            if (RemoveExistingItem.amount === 1) {
                // we want to remove the item
                RemoveUpdatedItems = state.items.filter(item => item.id !== action.id)
            } else {
                // we want to decrease the amount
                const updatedItem = { ...RemoveExistingItem, amount: RemoveExistingItem.amount - 1 }
                RemoveUpdatedItems = [...state.items]
                RemoveUpdatedItems[RemoveExistingCartIemIndex] = updatedItem
            }

            return {
                items: RemoveUpdatedItems,
                totalAmount: RemoveUpdatedTotalAmount
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
            id: id
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