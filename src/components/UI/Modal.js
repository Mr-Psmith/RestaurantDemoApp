import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>;
};

const Modal = props => {
    return 
    <>
        {ReactDOM.createPortal(<Backdrop />)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        {/* <Backdrop /> This if we would not use a portal. we use one to esuree the HTMP is nicer
        <ModalOverlay>{props.children}</ModalOverlay>    */}     
    </>
};

export default Modal;