import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import ImgPlaceholder from "../imgPlaceholder/ImgPlaceholder";
import MyButton from "../myButton/myButton";
import classes from "./ListItem.module.scss"
interface ListItemProps {
    imgSrc?:string,
    id?:string,
    title:string,
    value?:string,
    description?:string;
}
 
const ListItem: FunctionComponent<ListItemProps> = (props) => {
    const router = useNavigate();

    return ( 
    <div key={props.value} className={classes.list__item}>
        <div className={classes.img__wrapper}>
            {props.imgSrc && <ImgPlaceholder className={classes.list__img} imgSrc={props.imgSrc}/>}
        </div>
        <div>
            <h3>{props.title}</h3>
            <div className={classes.list__description}>
                {props?.description}
            </div> 
            <MyButton onClick={()=>router(`/Search/${props.id}`)}>View</MyButton>
        </div>
       
    </div> 
    );
}
 
export default ListItem;