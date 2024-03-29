import React, { useEffect } from "react";

export default function Alert({text,isOpen,setIsOpen}){
    useEffect(() => {
        if(isOpen){
            setTimeout(() => {
                setIsOpen(false)
            },4000)
        }
    },[isOpen])
    return(
        <>
            {
                isOpen && <div role="alert">
                    <p>{text}</p>
                </div>
            }
        </>
    )
}