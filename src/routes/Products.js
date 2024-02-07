import React from "react";
import Header from "../component/Header";
import TyreRange from "../component/TyreRange";
import Footer from "../component/Footer";
import useActive from "../hooks/useActive";
import useTitle from "../hooks/useTitle";
import Tyres from "../assests/Tyres.json";
import Img from "../assests/images/tire-4807271_1920.jpg";
import { Search } from "../assests/icons/Icons";
import "../styles/products.css";
import "../styles/calltoaction.css"

export default function Products(){
    useActive("Products");
    useTitle("Simblek products view an expolore");
    const { tyres } = JSON.parse(JSON.stringify(Tyres));
    const tabs = Object.keys(tyres)
    const [activeTab,setActiveTab] = React.useState(tabs[0])
    const [Opacity,setOpacity] = React.useState(1)
    const handleClick = (item) => {
        setOpacity(0)
        setActiveTab(item);
        setTimeout(() => {
            setOpacity(1)
        },400)
    }
    const Details = (size) => (
        <article className="product-details" key={size}>
            <img src={Img} alt="tyre display" />
            <section className="product-details-content">
                <p className="price">N 12,000</p>
                <section>
                    <strong className="leadtext">{activeTab} Tyre</strong>
                    <p>{size}</p>
                </section>
                <p className="highlighttext">Dolor pariatur incididunt fugiat adipisicing occaecat in ullamco amet. Aliquip do enim id mollit consectetur. Magna amet est occaecat cupidatat. Reprehenderit incididunt do esse aute eu amet officia in do ullamco ea ipsum.</p>
                <button className="mainsimblekbtn">
                    Order Now
                </button>
            </section>
        </article>
    )
    return(
        <>
            <Header />
            <main>
                <section className="calltoaction products-cto">
                    <article>
                        <h2>Products and Innovation</h2>
                        <p>Simblek provides great tyres with a broad range of products and services.</p>
                        <div role="form" className="products-input">
                            <input placeholder="Search Simblek" />
                            <Search dimension={"22"} fillColor={"#494949"}/>
                        </div>
                    </article>
                </section>
                <section className="Container tabcontainer">
                    <h2 className="titletext textcenter">Explore our wide range of tyres</h2>
                    <section role="tabpanel">
                        {
                            tabs.map(item => (
                                <div role="tab" className={activeTab === item? "activeproductstab":"productstab"} onClick={() => handleClick(item)} key={item}>{item}</div>
                            ))
                        }
                    </section>
                    <section className="card-container center" style={{opacity:Opacity}}>
                        {
                            tyres[activeTab].map(item => {return Details(item)})
                        }
                    </section>
                </section>
                <TyreRange />
            </main>
            <Footer />
        </>
    )
}