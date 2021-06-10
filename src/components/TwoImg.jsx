import React from "react";
import "./land.css"
const TwoImg = ()=>{
    return(<>
        <div className="two-container">
            <div className="cards">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" height="550" width="600"></img>
                    <h2>Order and pick up easy as that</h2>
                    <p>Just open the app, order your favorites, and enjoy contactless pay.<br></br> </p>
                    <p>From there, choose whichever pickup method is best for you.</p>
            </div>
            <div className="empty"></div>
            <div className="cards">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71819.png" height="550" width="600"></img>
            <h2>Coffee delivered. Day made.</h2>
                    <p>Brighten your day with a Starbucks® delivery on Uber Eats</p>
            </div>
        </div>
    </>);
}

export default TwoImg;