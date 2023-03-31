import { Search } from "./icons/Icons"

function SimblekInput({buttonColor,useLegacy}){
    return(
        <div className={useLegacy? "formContainer":null}>
            <form action="" className="searchForm">
                <input type="text" name="Input" id="" className="searchInput" placeholder="Search" />
                <button type="submit" className="simblekBtn" style={{backgroundColor:buttonColor}}>
                    <Search dimension={"18"} fillColor={"white"}/>
                </button>
            </form>
        </div>
    )
}

export default SimblekInput