import Card from "../card/card";
import { useState } from "react";
import './Grid.css'


function Grid({numberOfCard}){
    const [bord,setBord]=useState(Array(numberOfCard).fill(""));
    return(
       <div>
 <h1 className="heading">Current turn </h1>
<div className="grid">
          
  
          {bord.map((el ,idx)=><Card key={idx}/>)}
      </div>
      </div>
  )



      
   
}
export default Grid;