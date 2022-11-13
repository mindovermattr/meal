import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Card.module.scss"

interface CardProps {
    cardId:string,
    img:string,
    categoryName:string;
}
 
const Card: FunctionComponent<CardProps> = (props) => {

    const router = useNavigate()
    
    return ( 
    <div onClick={()=>router(`/recipes/${props.categoryName}`,{replace:true})} className={classes.card__content}>
        <img className={classes.card__img} src={props.img} alt={props.categoryName} />
        <h2 className={classes.card__title}>{props.categoryName}</h2>
    </div>
    );
}
 
export default Card;