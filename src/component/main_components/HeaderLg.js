import React from "react";
import SimblekInput from "../SimblekInput"

export default function HeaderLg(){
    return(
        <header className="headerContainer">
        <div className="line"></div>
        <div className="mainHeaderlg">
            <div className="headerBodyLg">
                <div className="headingLg">Simblek</div>
                <div className="subheadingLg">Tyres &amp; Wheels</div>
                <div className="contentLg">Buy the best new or used tryes at affordable prices</div>
                <div className="headerinputContainer">
                   <SimblekInput buttonColor={"#baae05"} useLegacy={false}/> 
                </div> 
            </div>
            <div className="headerImgLgContainer">
                <div className="headerImgLg"/>
            </div>
        </div>
        </header>
    )
}