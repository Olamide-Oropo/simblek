import React from "react";
import SimblekInput from "../SimblekInput";

export default function HeaderSm(){
    return(
        <header className="mainHeaderSm">
            <div className="headerBodySm">
                <div className="headingSm">Simblek</div>
                <div className="subheadingSm">Tyres &amp; Wheels</div>
                <div className="contentSm">Buy the best new or used tryes at affordable prices</div>
                <div className="headerinputContainer">
                   <SimblekInput buttonColor={"#baae05"} useLegacy={true}/> 
                </div> 
            </div>
        </header>
    )
}