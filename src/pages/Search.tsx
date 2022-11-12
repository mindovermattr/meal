import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomSelect from "../UI/CustomSelect/CustomSelect";
import "./styles/Search.scss"
import PostService from "../API/PostService";
import { IMealInfo } from "./interface/IMealInfo";
import {IMeal} from "./interface/IMeals"
import Loader from "../UI/Loader/Loader";
import ListItem from "../UI/ListItem/ListItem";

const OPTIONS = ['Meals',"Ingredients"];

const Search = () => {

    const [mealInfo,setMealInfo] = useState<IMealInfo[] | IMeal[]>()
    const [inputValue,setInputValue] = useState<string>("")
    const [selectValue, setSelectValue] = useState<string>(OPTIONS[0])


    const [fetchByIngredient, isIngredientLoading, errIngr]:any = useFetch(async () =>{
        const response = await PostService.getMealsByIngredient(inputValue);
        setMealInfo(response.data.meals);
    })

    const [fetchByMeal, isMealLoading, errMeal]:any = useFetch(async () =>{
        const response = await PostService.getMealByName(inputValue);
        setMealInfo(response.data.meals);
    })
    

    useEffect(()=>{
        fetchByMeal();
    },[])
  
    useEffect(() => {
        const timer = setTimeout(()=>{
            if (selectValue === "Ingredients") fetchByIngredient();
            else if (selectValue === "Meals") fetchByMeal();
        },350)
        return () => {
            clearTimeout(timer)
        }
    }, [selectValue, inputValue])
    
    return ( 
    <div className="container">
        <div className="search-form">
            <div className="form__select">
                <h3>Search by</h3> 
                <CustomSelect onChange={(e)=>setSelectValue(e.target.value)} defaultValue="Search by" options={OPTIONS}/>
            </div>
            <CustomInput onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" />
        </div>
        <div className="meal__content">
            
                {(isIngredientLoading || isMealLoading) ? <Loader/>
                :
                <div className="meal__list">
                    {mealInfo?.length !== 0 && mealInfo?.map(meal=>
                    <ListItem 
                        id={meal?.idMeal}
                        title={meal.strMeal} 
                        imgSrc={meal.strMealThumb}
                        key={meal.strMeal}
                        value={meal.idMeal}
                        description={meal.strInstructions ? meal.strInstructions: ""}
                    />)}
                </div>
                }
               
                
            </div>
        </div> 
    );
}
 
export default Search;


