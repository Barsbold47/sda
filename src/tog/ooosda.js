import React from "react";
import "./ooosda.css"

const Ooosda = (props) =>{
    return(
        <div className="">
            <div className="">
                <img src={props.img}/>

            </div>
            <div className="">
                <h2>{props.title}</h2>
            </div>
        </div>
     )

};
export default Ooosda