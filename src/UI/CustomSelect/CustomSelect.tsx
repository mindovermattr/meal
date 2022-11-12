import { ChangeEventHandler, FunctionComponent } from "react";
import classes from "./CustomSelect.module.scss"

interface CustomSelectProps {
    options: string[],
    defaultValue: string,
    onChange ?: ChangeEventHandler<HTMLSelectElement>,

}
 
const CustomSelect: FunctionComponent<CustomSelectProps> = ({options, defaultValue, onChange}) => {
    return ( 
    <select onChange={onChange} className={classes.select}>
       {/*  <option disabled value={defaultValue}>Find</option> */}
        {options.map(option=><option key={option} value={option}>{option}</option>)}
    </select> 
    );
}
 
export default CustomSelect;