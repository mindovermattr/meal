import { FunctionComponent, MouseEventHandler } from "react";
import classes from './myButton.module.scss'

interface MyButtonProps {
    children:string,
    className?:string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
 
const MyButton: FunctionComponent<MyButtonProps> = (props) => {
    return ( 
    <button onClick={props.onClick} className={[classes.btn,props?.className].join(" ")}>
        {props.children}
    </button> );
}
 
export default MyButton;