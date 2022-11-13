import {useEffect, useState } from "react";
import PostService from "../API/PostService";
import CategoryCard from "../UI/CategoryCard/CategoryCard";
import ICategories from "./interface/ICategories"
import "./styles/Recipes.scss"
 
const Recipes = () => {
    const [categories, setCategories] = useState<ICategories[]>([])

    useEffect(() => {
        const categories = PostService.getAllCategories();
        categories.then(res=>setCategories(res.data.categories))
      }, [])
      
    return ( <div className="container">
        <div className="cards">
            {categories.map(category=>(
            <CategoryCard 
                key={category.idCategory}
                cardId={category.idCategory}
                img={category.strCategoryThumb}
                categoryName={category.strCategory}
                />
            ))}
        </div>
    </div> );
}
 
export default Recipes;