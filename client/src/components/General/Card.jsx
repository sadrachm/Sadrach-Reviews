import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

function Card(prop) {
    const [brightness, setBrightness] = useState({filter:"brightness(100%)"});
    const [isOver, setIsOver] = useState(false);
    const history = useHistory();
    function handleOver(event) {
        setBrightness({filter:"brightness(10%)"});
        setIsOver(true);
    }  
    function handleOut(event) {
        setBrightness({filter:"brightness(100%)"})
        setIsOver(false);
    }
    function link(event) {   
        if (prop.type === "game") {
            history.push("/games/" + prop.id);  
        } else if (prop.type === "anime") {
            history.push("/animes/" + prop.id);  
        } else if (prop.type === "movie") {
            history.push("/movies/" + prop.id);
        }
    }
    return <div className="contain"> 
    <div onClick={link} style={{display:"inline"}} onMouseEnter={handleOver} onMouseLeave={handleOut}>
        <img className="hideMe" style={brightness} src={prop.imgURL} alt={" " + prop.title} ></img>
        {isOver && <div className="centered" ><p >{prop.title}</p></div>}
        {isOver && <div className="centered" ><p >{prop.content}</p></div>}              
        </div>
         {!isOver && <div className="hide">{prop.title}</div>}
        {!isOver && <div className="hide">{prop.content}</div>}
    </div>
}

export default Card;