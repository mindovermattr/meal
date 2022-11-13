import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMeal } from "../../pages/interface/IMeals";
import ImgPlaceholder from "../imgPlaceholder/ImgPlaceholder";
import MyButton from "../myButton/myButton";
import classes from "./MealCard.module.scss"


 
const MealCard: FunctionComponent<IMeal> = (props) => {
    const params = useParams();
    const routes = useNavigate();
    return ( 
        <div className={classes.card} key={props.idMeal}>
            <ImgPlaceholder className={classes.img} imgSrc={props.strMealThumb}/>
            <h3 className={classes.title}>{props.strMeal}</h3>
            <MyButton onClick={()=>routes(`/recipes/${params.name}/${props.idMeal}`)}className={classes.button}>Подробнее</MyButton>
        </div> 
        
    );
}
 
export default MealCard;