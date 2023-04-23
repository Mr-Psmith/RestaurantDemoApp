import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>;
};

const Modal = props => {
    const portalElement= document.getElementById("overlays");

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        {/* <Backdrop /> This if we would not use a portal. we use one to esuree the HTMP is nicer
        <ModalOverlay>{props.children}</ModalOverlay>    */}     
    </Fragment>
};

export default Modal;