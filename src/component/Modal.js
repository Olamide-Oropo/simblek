import React from "react";
import SimblekInput from "./SimblekInput";
import { TyreContext } from "../assests/TyreProvider";
import { GlobalContext } from "../assests/GlobalState";
import {ArrowIcon} from "./icons/Icons"

function Modal(){
    const [Tyres,setTyres] = React.useContext(TyreContext)
    const[isOpen,setIsOpen] = React.useContext(GlobalContext)
    const keys = Object.keys(Tyres)
    const Ref = React.useRef([])
    const listItems = Object.entries(Tyres)
    Ref.current = keys.map((item,index) => {
        return Ref.current[index] ?? React.createRef()
    })
    const CloseModal = () => {
        setIsOpen(false)
    }
    const Open = (ref,index) => {
        const isOpen = ref.current.children[1].classList.contains("d-none")
        if(isOpen){
            ref.current.children[1].classList.remove("d-none")
            ref.current.children[1].classList.add("scrollDown")
            ref.current.children[0].children[1].classList = "listIcon-open"
            ref.current.children[0].children[0].style.setProperty("color","#045bbf")
        }else{
            ref.current.children[1].classList.add("d-none")
            ref.current.children[1].classList.remove("scrollDown")
            ref.current.children[0].children[0].style.setProperty("color","#212529")
            ref.current.children[0].children[1].classList = "listIcon"
        }
    }
    const renderedList = listItems.map((item,index) => {
        const itemName = item[0].replace("_"," ")
        const subLists = item[1].map((item,index) => {
            return(
                <li className="simbleksublistItem" key={item}>
                    <p>{item}</p>
                </li>
            )
        })
        return(
            <div className="simbleklistitemContainer" ref={Ref.current[index]} key={item} onClick={() => Open(Ref.current[index],index)}>
                <li className="simbelklistItem">
                    <p>{itemName}</p>
                    {item[1].length > 0 && (
                        <div className="listIcon">
                            <ArrowIcon dimension={"16"} fillColor={"black"}/>
                        </div>
                    )}
                </li>
                <div className="d-none scrollDown">
                   {subLists} 
                </div>
                
            </div>
            )
    })
    return(
        <div className="modalContainer">
            <SimblekInput buttonColor={"#045bbf"} useLegacy={true}/>
            <div className="listContainer">
                {renderedList}
            </div>
        </div>
    )
}

export default Modal