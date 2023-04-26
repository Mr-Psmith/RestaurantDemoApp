import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeCartHandlerPr1}></div>;
};

const ModalOverlay = props => {
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>;
};

const Modal = props => {
    const portalElement= document.getElementById("overlays");

    return <>
        {ReactDOM.createPortal(<Backdrop closeCartHandlerPr1={props.closeCartHandlerPr2} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        {/* <Backdrop /> This if we would not use a portal. we use one to esuree the HTMP is nicer
        <ModalOverlay>{props.children}</ModalOverlay>    */}     
    </>
};

export default Modal;