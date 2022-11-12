import { FunctionComponent } from "react";
import "./styles/Profile.scss"

interface ProfileProps {
    
}
 
const Profile: FunctionComponent<ProfileProps> = () => {
    return ( 
    <div className="container">
        <div className="profile__content">
            <div>
                <img src="https://imgholder.ru/250x300/8493a8/adb9ca.jpg&text=Photo" alt=""/>
            </div>
            <div>
                <h2>User Name</h2>
                <div className="profile__favorites">
                    <div className="favorite__categories">
                        <h4>Favorite categories</h4>
                        asdasd
                    </div>
                    <div className="favorite__ingredients">
                        <h4>Favorite ingredients</h4>
                        asd
                    </div>
                </div>
            </div>
           
        </div>
        <div>
            {/* swiper */}
            <h4>Favorite Meals</h4>
           </div>
    </div> 
    );
}
 
export default Profile;