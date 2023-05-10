import React from "react";
import classes from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input} >
        <label htmlFor={props.inputProps.id} >{props.labelProps}</label>
        <input ref={ref} id={props.inputProps.id} {...props.inputProps} />  {/* So if aI get it well, we made an input prios on the other side as an object, and we are extracting that here  */}
        { /* id={props.input.id} A little trick to pass all other configuration data I might've gotten for this input to this input element here as props. */}
    </div> /* {...props.input} This ensures that all the key value pairs in this input object, which we receive on props input are added as props to input. So if input object here is an object that for example has 
                type text. So if that is what we get on props input, for example, then this code here would make sure that type equals text is being added. This is how that works when you use the spread operator on an element like this.
                        It's simply a convenient way of making this input highly configurable from outside this component, through this input prop here. */

});

export default Input;