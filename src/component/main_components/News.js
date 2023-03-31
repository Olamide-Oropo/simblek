import React from "react";

function News({NewsItems}){
    const NewsHeaders = Object.keys(NewsItems)
    const NewsBody = Object.values(NewsItems)
    const NewsJsx = NewsHeaders.map((item,index) => (
        <div className="newsContainer" key={index}>
            <div className="newsDemark" />
            <div style={{marginLeft:"1rem"}}>
                <div className="newsHeaderText">{item}</div>
                <div className="newsBody">{NewsBody[index].value}</div>  
            </div>
            
        </div>
    ))
    return(
        <div>
            <div className="newsMainContainer">
                {NewsJsx}
            </div>
            
        </div>
    )
}

export default News