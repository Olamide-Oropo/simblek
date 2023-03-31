import * as React from "react";
import HeaderLg  from "./main_components/HeaderLg";
import HeaderSm from "./main_components/HeaderSm";
import News from "./main_components/News";
import OurServices from "./main_components/OurServices";
import Data from "../assests/New.json"
import Title from "./Title";
import Section1Sm from "./main_components/Section1Sm";
import Section1Lg from "./main_components/Section1Lg";


function Main({screenSize}){
    const JsonData = JSON.parse(JSON.stringify(Data.News))
    const isLg = screenSize > 700
    return(
        <main>
            {isLg? <HeaderLg/>:<HeaderSm />}
            {isLg? <Section1Lg />:<Section1Sm />}
            <section className="mainSection2">
                <Title text={"Our Services"}/>
                <div className="ourServices">
                    <OurServices />
                </div>
            </section>
            <section className="mainSection3">
                <Title text={"Latest Simblek News"}/>
                <News NewsItems={JsonData} />
            </section>
        </main>
    )
}

export default Main