import { FunctionComponent, useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetch from "../hooks/useFetch";
import Loader from "../UI/Loader/Loader";
import MealCard from "../UI/MealCard/MealCard";
import { IMeal } from "./interface/IMeals";
import "./styles/Categories.scss"

 
const Categories: FunctionComponent = () => {
    const params = useParams();
    
    const [meals, setMeals] = useState<IMeal[]>([])

    const [fetchMeals,isLoading,err]:any=useFetch(async ()=>{
        if(params.name){
            const response = await PostService.getMealsByCategory(params.name);
            setMeals(response.data.meals);
        } else{
            const response = await PostService.getMealsByIngredient(params.ingredient);
            setMeals(response.data.meals);
        }
       
    })


    useEffect(() => {
        fetchMeals()
       
    }, [])
    
    return ( 
    <div className="container meals" >
        {isLoading ?
            <Loader/>
            :
            meals.map(meal=>(
            <MealCard
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                idMeal={meal.idMeal}
            />
            ))
        }
    </div> 
    );
}
 
export default Categories;