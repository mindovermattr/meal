import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetch from "../hooks/useFetch";
import ImgPlaceholder from "../UI/imgPlaceholder/ImgPlaceholder";
import Loader from "../UI/Loader/Loader";
import MyButton from "../UI/myButton/myButton";
import { IMealInfo } from "./interface/IMealInfo";
import "./styles/MealInfo.scss"

interface MealInfoProps {
    
}
 
const MealInfo: FunctionComponent<MealInfoProps> = () => {

    const params = useParams()
    const router = useNavigate();

    const [ingredients, setIngredients] = useState<[string,any][]>([])
    const [measure, setMeasure] = useState<[string,any][]>([])
    const [mealInfo,setMealInfo] = useState<IMealInfo>()
    
    const [fetchMealById,isLoading,error]:any= useFetch(async () => {

        const response = await PostService.getMealsById(params.id);

        const _ingredients = Object.entries(response.data.meals[0]).filter(([key,value]) =>key.indexOf('strIngredient')===0 && value);

        const _measure = Object.entries(response.data.meals[0]).filter(([key,value]) => key.indexOf('strMeasure')===0 && value);
        
        setIngredients(_ingredients);
        setMeasure(_measure);

        response.data.meals[0].strYoutube = transformLink(response.data.meals[0].strYoutube)

        setMealInfo(response.data.meals[0])
    })
    
    const transformLink = (str:string) => {
        if (typeof str == "string"){
        let flag = false;
        return str.split("").map(el=>{

            if(flag) return el

           flag = el === "=" ? true: flag;

        }).join("")

        }
    }

    useEffect(()=>{
        fetchMealById()
    },[])
    
    return ( 
    <div  className="container">
        {isLoading ? <Loader/>
        :
        <>
            <div className="info__wrapper">
                <div className="img__wrapper">
                    <ImgPlaceholder className="img" imgSrc={mealInfo?.strMealThumb} />
                </div>

                <section className="info__content">

                    <h3 className="info__title">{mealInfo?.strMeal}</h3>

                    <div>
                        <h4>Ingredients:</h4>
                        <div className="info__ingredients">
                            {ingredients.map((ingredient,idx)=>(  
                                <>
                                    <span className="info__ingredients__item" onClick={()=>router(`/recipes/ingredient/${ingredient[1]}`)} key={ingredient[0]}>{ingredient[1]} </span>- <span> {measure[idx][1]} \\ </span>
                                </>
                            ))
                            }
                        </div>
                    </div>
                    <div>
                       <h4>Category:</h4> {mealInfo?.strCategory ? mealInfo?.strCategory: "none"}
                    </div>
                    <div>
                       <h4>Tags:</h4> {mealInfo?.strTags ? mealInfo?.strTags: "none"}
                    </div>
                    </section>
            </div>
            <div className="info__instruction">
                <h4>Instruction:</h4>
                {mealInfo?.strInstructions }
            </div>
            <div className="info__video">
                {mealInfo?.strYoutube && 
                <>
                <h4>Video Instruction:</h4>
                    <iframe 
                        title="Youtube"
                        width="600px" 
                        height="350px" 
                        src={`https://www.youtube.com/embed/${mealInfo?.strYoutube}`}
                    />
                </>
                }
            </div>
            <MyButton className="info__btn">Add To Favorites</MyButton>
        </>
        }
    </div> 
    );
}
 
export default MealInfo;