import React,{ useRef,useState } from "react"
import { GlobalContext } from "../assests/GlobalState"
import {Cancel,Hamburger} from "./icons/Icons"

const Nav = () => {
    const ref = useRef(null)
    const[state,setState] = useState("navContainer")
    const[isOpen,setIsOpen] = React.useContext(GlobalContext)
    var handleClick = () => {
        setIsOpen(!isOpen)
    }
    return(
        <nav className="navContainer" ref={ref}>
            <span>
                <div className="design">
                    <div className="designS">S</div>
                </div>
            </span>
            <span className="brandName">
                <span className="brandS">S</span><span>imblek</span>
            </span>
            <span className="navIcon" onClick={handleClick}>
                {isOpen? <Cancel dimension={"30"} fillColor={"white"}/>:<Hamburger dimension={"30"} fillColor={"white"}/>}
            </span>
        </nav>
    )
}

export default Nav
