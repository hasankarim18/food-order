import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem.js'

import CarContext from '../../store/cartContext'

const Cart = (props) => {

    const cartCtx = useContext(CarContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
        //  console.log(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    }

    const cartItems = <ul className={classes['cart-items']} >{
        cartCtx.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                id={item.id}
                amount={item.amount}

                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
            // <li key={item.id} >{item.name}</li>
        ))
    } </ul>

    return (
        <Modal onClose={props.onClose} >
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onClose} className={classes['button-alt']} >Close</button>
                {hasItems && <button className={classes.button} >Order</button>}

            </div>
        </Modal>
    )
}

export default Cart