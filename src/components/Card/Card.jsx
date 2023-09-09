import Icons from "../icon/icon";
import './card.css';
function Card({player}){
    let icon=<Icons/>
    if(player=='x'){
        icon=<Icons name='cross'/>
    }
    else if(player=='o'){
        icon=<Icons name='circule'/>
    }
    return(
        <>
        <div className="card">
            {icon}
        </div>
        
        </>
    )
}
export default Card;