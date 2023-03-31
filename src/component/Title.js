import React from "react";
export default function Title({text}){
    return(
        <div className="titleContainer">
            <div className="titleText">{text}</div>
            <div className="titleUnderline"></div>
        </div>
    )
}