import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../UI/CustomInput/CustomInput";

interface HeaderProps {
    
}
 
const NavMenu: FunctionComponent<HeaderProps> = () => {
    return ( 
    <header className="bg-main-color">
        <div className="header__wrapper container">
            <nav className="header__content">
                <Link to="/home"  className="nav__item">Home</Link>
                <Link to="/recipes" className="nav__item">Recipes</Link>
                <Link to="/Profile" className="nav__item">Account</Link>
                <Link to="/Search" className="nav__item">Search</Link>
            </nav>
        </div>
        
    </header> 
    );
}
 
export default NavMenu;