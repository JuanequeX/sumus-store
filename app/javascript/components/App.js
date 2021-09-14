import React from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Whatissumus from './whatIsSumus/Whatisumus';
import Products from './products/Products';
import Footer from './footer/Footer';
import app from './app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Whatissumus />
      <Products />
      <Footer />
    </div>
  )
}

export default App;
