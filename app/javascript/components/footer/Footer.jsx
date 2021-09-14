import React, { useState } from 'react';
import Instagram from '../../assets/instagram-icon.svg';
import Facebook from '../../assets/facebook.svg';
import Cross from '../../assets/crose.svg';
import LogoFooter from '../../assets/logo-footer.svg';
import LogoFooterDesktop from '../../assets/logo-footer-desktop.svg';
import FacebookDesktop from '../../assets/facebook-icon-footer-desktop.svg';
import InstagramDesktop from '../../assets/intagram-icon-footer-desktop.svg';
import footer from './footer.scss';

const Footer = () => {

  const [showAboutUs, setShowAboutUs] = useState(null);
  const [showProducts, setShowProducts] = useState(null);

  const changes = (element) =>{
    if(element === null) return "";
    if(element === false) return "first-information__expand-back";
    if(element === true) return "first-information__expand-rotate";
  }

  return (
    <footer className='footer-master'>
      <div className='social-master'>
        <p className='social-master__title'>Sigue nuestras redes</p>
        <div className='social-master__container'>
          <a href="https://www.instagram.com/sumus.mx">
            <img className='social-master__instagram' src={Instagram} alt="Icon Instagram" />
          </a>
          <a href="https://www.facebook.com/sumus.mx">
            <img className='social-master__facebook' src={Facebook} alt="Icon" />
          </a>
        </div>
      </div>

      <div className = 'information-master'>
        <div className='first-information'>
          <div className='first-information__container'>
            <p className='first-information__title'>Productos</p>
            <img src={Cross} alt="Expandir" onClick = {() => setShowProducts(!showProducts)}
                 className={`first-information__expand ${changes(showProducts)}`} />
          </div>

          <div className={showProducts ? 'first-information__container-links' : 'first-information__hidden-elements'}>
            <a className='first-information__links'>T-shirt</a>
            <a className='first-information__links'>Tote Bags</a>
            <a className='first-information__links'>Caps</a>
            <a className='first-information__links'>Stickers</a>
          </div>
        </div>

        <div className='second-information'>
          <div className='second-information__container'>
            <p className = 'second-information__title'>Nosotros</p>
            <img className = {`second-information__expand ${ changes(showAboutUs) }`} src={Cross} alt="Expandir"
                 onClick = { () => setShowAboutUs(!showAboutUs)} />
          </div>

          <div className = {showAboutUs ? 'second-information__container-links' : 'second-information__hidden-elements'}>
            <a className='second-information__links'>Nuestra Historia</a>
            <a className='second-information__links'>Faq's</a>
          </div>
        </div>

        <div className='desktop-social-information'>
          <div className='desktop-social-information__container'>
            <p className = 'desktop-social-information__title'>Unete a nuestra comunidad</p>
          </div>

          <div className = 'desktop-social-information__container-icons'>
            <a href="https://www.facebook.com/sumus.mx/">
              <img className='desktop-social-information__icons' src={FacebookDesktop} />
            </a>
            <a href="https://www.instagram.com/sumus.mx">
              <img  className='desktop-social-information__icons' src={InstagramDesktop}/>
            </a>
          </div>
        </div>

        <div className='third-information'>
          <p className='third-information__title'>Contactanos</p>
          <a href="mailto:sumus.mx@gmail.com">
            <button className='third-information__button'>Enviar Correo</button>
          </a>
        </div>
      </div>

        <div className='last-information'>
          <img className='last-information__logo' src={LogoFooter} alt="Logo Footer" />
          <img className='last-information__logo-desktop' src={LogoFooterDesktop} alt="Logo Footer Desktop" />
          <p className='last-information__copyright'>
            &copy; Copyright 2021 SUMUS.</p>
          <p className='last-information__copyright'>
            All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
