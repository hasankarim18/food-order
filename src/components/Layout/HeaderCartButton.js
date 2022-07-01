import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cartContext'

const HeaderCartButton = (props) => {

    const ctx = useContext(CartContext)
    console.log('ctx', ctx)

    return (
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon} >
                <CartIcon />
            </span>
            <span>Visit Your Cart </span>
            <span className={classes.badge} >3</span>
        </button>
    )
}

export default HeaderCartButton