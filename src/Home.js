import React from "react";
import "./Home.css";
import Product from "./Product";
import Shoe1 from "./img/shoe1.png";
import Cloth3 from "./img/cloth3.jpg";
import Pegasus from "./img/pegasus.jpg";
import Airmax1 from "./img/airmax1.jpg";
import Shoe3 from "./img/shoe3.jpeg";
import Watch6 from "./img/w6.jpeg";
import Watch1 from "./img/w1.jpeg";
import Cloth4 from "./img/cloth4.jpg";
import Airmax2 from "./img/airmax2.jpg";
import Airvapormax from "./img/airvapormax.jpg";
import Shoe2 from "./img/shoe2.jpeg";
import Shoe4 from "./img/shoe4.jpeg";
//import Background from "./img/background0.png";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //src={Background}
          alt="" //"background0"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Ladies heels "
            price={11.96}
            rating={5}
            image={Shoe1}
          />
          <Product
            id="12321341"
            title="Ladies heels "
            price={11.96}
            rating={5}
            image={Shoe1}
          />
          <Product
            id="12321341"
            title=" male white and black t-shirt"
            price={11.96}
            rating={5}
            image={Cloth3}
          />
          <Product
            id="49538094"
            title="Nike Sneaker "
            price={239.0}
            rating={2}
            image={Pegasus}
          />
           <Product
            id="49538094"
            title="Sport Sneakears very comfortable with 3 soul layers "
            price={239.0}
            rating={2}
            image={Airmax1}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="3 inch Ladies Heels availabe in store right now!!! click on the product to make an order stocks are limited so hurrry now and buy yours"
            price={199.99}
            rating={3}
            image={Shoe3}
          />
          <Product
            id="23445930"
            title="Silver and Gold watch"
            price={98.99}
            rating={5}
            image={Watch6}
          />
          <Product
            id="3254354345"
            title="black and gold watch order yours now "
            price={598.99}
            rating={4}
            image={Watch1}
          />
          <Product
            id="3254354345"
            title="Custom made t-shirt make your creativity come to live "
            price={598.99}
            rating={4}
            image={Cloth4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="cool Airmax2 sneakers avaible in store for both ladies and gents  "
            price={1094.98}
            rating={4}
            image={Airmax2}
          />
          <Product
            id="90829332"
            title="Nike vapour Soccer shoe"
            price={1094.98}
            rating={4}
            image={Airvapormax}
          />
           <Product
            id="90829332"
            title="Male Formal shoes Now available"
            price={1094.98}
            rating={4}
            image={Shoe2}
          />
           <Product
            id="90829332"
            title="Male Wedding shoes "
            price={1094.98}
            rating={4}
            image={Shoe4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
