import React, { useState } from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Whatissumus from './whatIsSumus/Whatisumus';
import Products from './products/Products';
import Footer from './footer/Footer';
import Sidebar from './side-bar/Sidebar';
import app from './app.scss';

const App = () => {
  const [showSideBar, setShowSiteBar] = useState(false);

  const toggleSideBar = () => {
    setShowSiteBar(!showSideBar)
  }

  return (
    <div>
      <Sidebar actionClose={toggleSideBar} isOpen={showSideBar} />
      <Header actionOpen={toggleSideBar} isOpen={showSideBar} />
      <Hero />
      <Whatissumus />
      <Products />
      <Footer />
    </div>
  )
}

export default App;
