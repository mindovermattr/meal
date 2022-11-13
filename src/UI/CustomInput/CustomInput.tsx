import { ChangeEventHandler, FunctionComponent } from "react";
import classes from "./CustomInput.module.scss"

interface CustomInputProps {
    placeholder?: string,
    value?:string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    type: string;
}
 
const CustomInput: FunctionComponent<CustomInputProps> = (props) => {
    return ( 
    <form onSubmit={(e)=>e.preventDefault()} className={classes.form}>
        <input onChange={props?.onChange} value={props?.value} className={classes.input} placeholder={props?.placeholder} type={props.type}/>
    </form> 
    );
}
 
export default CustomInput;