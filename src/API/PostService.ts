import axios from "axios"

export default class PostService {
    static async getAllCategories(){
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        return response;
    }

    static async getMealsByCategory (categoryName:any){
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        return response;
    } 

    static async getMealsById (mealId:any){
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        return response;
    } 
    static async getMealsByIngredient (Ingredient:any){
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
        return response;
    }
    static async getMealByName (Name:any){
        const response = await axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`);
        return response;
    }
};
