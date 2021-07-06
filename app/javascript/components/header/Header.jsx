import React from 'react';
import HamburgerLogo from '../../assets/hamburger-icon.svg';
import LogoHeader  from '../../assets/sumus-logo-final.png';
import LogoShop from '../../assets/shop-icon.png';
import header from './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a className='header__hamburger_icon'><img src={HamburgerLogo} alt="Menu" /></a>
      <a className='header__productos'>Productos</a>
      <a className='header__sumus_logo'><img src={LogoHeader} alt="Logotipo"/></a>
      <a className='header__nosotros'>Nosotros</a>
      <a className='header__logo_shop'><img src={LogoShop} alt="Tienda" /></a>
    </header>
  );
}

export default Header;
