import React from "react";

export default function OurServices(){
    return(
        <div className="OurservicesContainer"> 
            <div className="col-lg-3">
            <div className="card simblekCard">
                <div className="card-body">
                    <div className="h1 text-center"><i className="bi bi-fan text-light" style={{fontSize:60}}></i></div>
                    <h5 className="card-title text-light text-center fw-bold simblekcardTitle">Quality Control</h5>
                    <div className="lead simblekCardText" >Quality new and used tyres avaliable from a wide range of brands at different tyre
                        sizes.</div>
                </div>
            </div>
            </div>
            <div className="col-lg-3">
                <div className="card simblekCard">
                    <div className="card-body">
                        <div className="h1 text-center"><i className="bi bi-truck text-light" style={{fontSize:60}}></i></div>
                        <h5 className="card-title text-light text-center fw-bold simblekcardTitle">Instant Deleviry</h5>
                        <div className="lead simblekCardText" >Fast,easy,Affordable delivery anywhere anytime.</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card simblekCard">
                    <div className="card-body">
                        <div className="h1 text-center"><i className="bi bi-headset" style={{fontSize:60}}></i></div>
                        <h5 className="card-title text-light text-center fw-bold simblekcardTitle">Customer Service</h5>
                        <div className="lead simblekCardText" >Adequate online customer service with 8-6 <strong>(8am-6pm)</strong> call lines to our client.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}