
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import MealInfo from "../pages/MealInfo";
import Profile from "../pages/Profile";
import Recipes from "../pages/Recipes";
import Search from "../pages/Search";



export const routes = [
    {path:"/home", component:<Home/> },
    {path:"/recipes", component:<Recipes/>},
    {path:"/recipes/:name", component:<Categories/> },
    {path:"/recipes/ingredient/:ingredient", component:<Categories/> },
    {path:"/recipes/:name/:id", component:<MealInfo/> },
    {path:"/Search/:id", component:<MealInfo/> },
    {path:"/Profile", component:<Profile/> },
    {path:"/Search", component:<Search/> },
    
]

/* export const publicRoutes = [
    {path:"/login", component:<Login/>},
] */