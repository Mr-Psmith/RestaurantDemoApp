import React from "react";

import classes from "./header.module.css";
import CartButton from "./header-cart-button";
import mealsImage from "../../assets/img/meals.jpg";

const Header = (props) => {

    

    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onClickPr={props.openModalHandlerPr} />
            </header> 
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="sok kaja on the table" />
            </div>
        </>
    );
};

export default Header;