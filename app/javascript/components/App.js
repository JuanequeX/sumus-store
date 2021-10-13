import React, { useState } from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Whatissumus from './whatIsSumus/Whatisumus';
import ProductsHome from './products-home/Products-home';
import Products from './products/Products';
import Footer from './footer/Footer';
import About from './about-us/About';
import Sidebar from './side-bar/Sidebar';
import app from './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const [showSideBar, setShowSiteBar] = useState(false);

  const toggleSideBar = () => {
    setShowSiteBar(!showSideBar)
  }

  return (
    <Router>
      <Sidebar actionClose={toggleSideBar} isOpen={showSideBar} />
      <Header actionOpen={toggleSideBar} isOpen={showSideBar} />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Whatissumus />
          <ProductsHome />
        </Route>

        <Route path="/productos">
          <Products />
        </Route>

        <Route path="/nosotros">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
