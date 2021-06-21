import React from "react";
import "C:/Users/PC-7/Desktop/react projects/navigation/src/components/land.css"
const Land =(props)=>{
    return<>
    <div className={props.class}>
        <div className="land-text">
            <div className="placement"> <h1>{props.heading}</h1></div>
            <div className="placement"><h3>{props.minitxt}</h3></div>
        </div>
        <div className="land-img">
            <img src={props.imgsrc} height={props.height} width={props.width} alt="img"></img>
        </div>
    </div>
    </>
}


export default Land;