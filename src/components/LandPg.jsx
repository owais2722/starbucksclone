import React from "react";
import Land from "./Land";
import TwoImg from "./TwoImg";
 const LandPg = ()=>{
     return(<>
        <Land imgsrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png" class="land-container" heading="FREE COFFEE A TAP AWAY" minitxt="join now to get rewards" height="370px" width="600px" />
        <Land imgsrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71654.jpg" class="land-container-reverse"  heading="REFRESHING" minitxt="Explore thirst-quenching Starbucks Refreshers® beverages: Mango Dragonfruit, Strawberry Açaí and Kiwi Starfruit." height="550px" width="600px" />
        <Land imgsrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71655.jpg" class="land-container"  heading="COLD BREW" minitxt="Recharge with cold, lush, velvety-smooth coffee—served with or without house-made sweet cream." height="550px" width="600px" />
        <TwoImg/>
        <Land imgsrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71657.jpg" class="land-container"  heading="Creating positive change" minitxt="We believe coffee can help fuel connection and strengthen communities. See how our partners (employees) are uplifting neighborhoods everywhere." height="350px" width="600px" />
     </>);
 }


 export default LandPg;