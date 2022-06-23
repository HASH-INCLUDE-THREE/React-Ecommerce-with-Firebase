import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Contact from "./Contact";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51K2A8ZFInSMRvrgdk1wRwXg7LouV7FZM7md7k3k5ptrCRoSYnUGiljeLvKWq9vAUQygmsmJgCZoSkrQVeantRFKm00zPzvbBMj"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header />   */}
      
        <Switch>
          <Route path="/orders">
            <Header /> 
            <Orders />
            {/*<Footer />*/}
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            {/*<Footer />*/}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/*<Footer />*/}
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
              {/*<Footer />*/}
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/*<Footer />*/}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
