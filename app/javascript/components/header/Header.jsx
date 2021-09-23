import React, {useState} from 'react';
import HamburgerLogo from '../../assets/hamburger-icon.svg';
import LogoHeader  from '../../assets/sumus-logo-final.png';
import LogoHeaderClose from '../../assets/logo-header-close.svg';
import LogoShop from '../../assets/shop-icon.png';
import header from './header.scss';

const Header = ({actionOpen, isOpen}) => {

  return (
    <header className='header'>
      <span className={isOpen ? 'header__hamburger-icon-close' :'header__hamburger_icon'}
        onClick={actionOpen}>
        <img onClick = {actionOpen}
          src={isOpen ? LogoHeaderClose : HamburgerLogo} alt="Menu" />
      </span>
      <a className='header__productos'>Productos</a>
      <a className='header__sumus_logo'><img src={LogoHeader} alt="Logotipo"/></a>
      <a className='header__nosotros'>Nosotros</a>
      <a className='header__logo_shop'><img src={LogoShop} alt="Tienda" /></a>
    </header>
  );
}

export default Header;
