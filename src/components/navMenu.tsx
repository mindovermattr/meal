import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../UI/CustomInput/CustomInput";


 
const NavMenu = () => {
    return ( 
    <header className="bg-main-color">
        <div className="header__wrapper container">
            <nav>
                <ul className="header__content">
                    <li><Link to="/home"  className="nav__item">Home</Link></li>
                    <li><Link to="/recipes" className="nav__item">Recipes</Link></li>
                    <li><Link to="/Profile" className="nav__item">Account</Link></li>
                    <li><Link to="/Search" className="nav__item">Search</Link></li>
                </ul>
            </nav>
        </div>
        
    </header> 
    );
}
 
export default NavMenu;