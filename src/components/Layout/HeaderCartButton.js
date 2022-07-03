import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cartContext'

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);

        // always clene up timeout function

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon} >
                <CartIcon />
            </span>
            <span>Visit Your Cart </span>
            <span className={classes.badge} >{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton