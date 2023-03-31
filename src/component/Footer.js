import React from "react";
import {FaceBook,Whatsapp,Instagram,Telegram,Twitter} from "./icons/Icons"
function Footer(){
    const color = "#045bbf" 
    return(
        <footer>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <div className="footerTitle">Follow us on</div>
                <div className="footerTitleLine"/>
            </div>
            <div className="linkIcons">
                <FaceBook dimension={"35"} fillColor={color}/>
                <Instagram dimension={"35"} fillColor={color}/>
                <Telegram dimension={"35"} fillColor={color} />
                <Twitter dimension={"35"} fillColor={color} />
                <Whatsapp dimension={"35"} fillColor={color} />
            </div> 
            <div className="footerMain">
                <div className="footerHeader">Copyright &copy; 2023 Simblek</div>
                <div className="footerLine" />
                <div className="footerBottom">
                    Company Info | Privacy | Conatct Us | Cookie Policy | Legal and Privacy
                </div>
            </div>
        </footer>
    )
}

export default Footer