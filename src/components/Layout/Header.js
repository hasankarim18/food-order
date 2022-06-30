import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import plater from '../../assets/plater.jpg'


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']} >
                <img src={plater} alt="A table full of delicious dish" />
            </div>
        </React.Fragment>
    )
}

export default Header