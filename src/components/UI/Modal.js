import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return (
        <div onClick={props.onClose} className={classes.backdrop}>

        </div>
    )
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    const overlay = document.getElementById('overlay')
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, overlay)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
        </Fragment>
    )
}

export default Modal