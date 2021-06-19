import React from "react";

const ProductCard = ()=>{
    return(<>
       <div className="productcard-container">
           <div   className="productcard-img" >
            <img src="images/coffee2.png"></img>
           </div>
           <div className="productcard-description">
           <div className="productcard-text">
                <h1>Caffè Americano</h1>
                <p>
                Espresso shots topped with hot water create a light layer of crema <br></br> culminating in this wonderfully rich cup with depth and nuance.<br></br> Pro Tip: For an additional boost, ask your barista to try this with an extra shot.
                </p>
            </div>
            <div className="product-price-button">
            <p><span>78</span>$</p>
            <button type="button">buy now</button>
            </div>
           </div>
       </div>
    </>);
}

export default ProductCard;