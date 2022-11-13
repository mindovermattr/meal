import { FunctionComponent } from "react";
import classes from './ImgPlaceholder.module.scss'
interface ImgPlaceholderProps {
    imgSrc?:string,
    className?:string;
}
 
const ImgPlaceholder: FunctionComponent<ImgPlaceholderProps> = ({imgSrc,className}) => {
    return (
        <div className={classes.imgWrapper}>
            <img className={[className,classes.img].join(" ")} src={imgSrc} alt="Картинка" />
        </div>
    );
}
 
export default ImgPlaceholder;