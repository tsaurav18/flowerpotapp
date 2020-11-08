import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./components/pages/Search.css";
import Home from "./components/pages/Home";
import About from "./components/pages/about/About";
import Footer from "./components/pages/footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Checkout from "./components/Checkout.js";
import Login from "./components/pages/login/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hl47bFp8XOhVxcXHONW3Z5cYXJ6ceUjKpE9QGJuuNTD4CMCyXfliGIuA0gejzEmIcZS2Q5N7FSTt9dVMEsiISGA00z4C9XIog"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
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
      <Switch>
        <Route path="/" exact component={Home}>
          <Navbar />
          <Home />

          <Footer />
        </Route>
        <Route path="/orders" exact component={Orders}>
          <Navbar />
          <Orders />

          <Footer />
        </Route>
        <Route path="/Checkout" exact component={Checkout}>
          <Navbar />
          <Checkout />

          <Footer />
        </Route>

        <Route path="/about" component={About}>
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/contact" component={Contact}>
          <Navbar />
          <Contact />

          <Footer />
        </Route>
        <Route path="/payment" component={Payment}>
          <Navbar />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
        </Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
