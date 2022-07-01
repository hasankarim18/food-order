import CartContext from "./cartContext"


const CartProvider = props => {

    const addItemToCartHandler = item => { }
    const removeItemFromCartHandler = id => { }

    const CartContextHelper = {
        items: [],
        totalAlounts: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={CartContextHelper}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider