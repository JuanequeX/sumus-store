import React from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Whatissumus from './whatIsSumus/Whatisumus';
import Products from './products/Products';
import app from './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Whatissumus />
      <Products />
    </>
  )
}

export default App;
