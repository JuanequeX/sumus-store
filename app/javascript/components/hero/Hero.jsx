import React from 'react';
import HeroLogo from '../../assets/hero-logo.svg';
import hero from './hero.scss';

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-container-info'>
          <h1 className='hero-container-info__title'>SUMUS EXPERIENCIA DE LIBERTAD</h1>
          <p className='hero-container-info__subtitle'>Imponiendo un  nuevo estilo en la escena</p>
          <button className='hero-container-info__button'>VER PRODUCTOS</button>
        </div>
        <div className='hero-container-image'>
          
        </div>
      </div>
    </>
    );
}

export default Hero;
