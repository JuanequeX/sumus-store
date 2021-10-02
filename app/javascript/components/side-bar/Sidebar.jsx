import React, { useEffect, useState } from 'react';
import Instagram from '../../assets/instagram-icon.svg';
import Facebook from '../../assets/facebook.svg';
import sidebar from './sidebar.scss';

const Sidebar = ({isOpen, actionClose}) => {
  const [taxonomies, setTaxonomies ] = useState([]);

  useEffect(() => {
    document.body.style.overflow = `${isOpen ? 'hidden' : 'unset'}`
  },[isOpen] )

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/solidus/api/taxonomies.json', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setTaxonomies(data.taxonomies);
    });
  }

    return (
    <>
      <div onClick={actionClose} data-show={isOpen} className='shadow-background'></div>
      <div className="sidebar-container">
        <div className={`side-bar-master ${ isOpen ? 'side-bar-master-show' : 'side-bar-master-hidden' }`} >
          <div className='side-bar-master__products'>
            <div className='side-bar-master__container'>
              <p className='side-bar-master__title'>Productos</p>
            </div>

            <div className='side-bar-master__container-links'>
              { taxonomies?.map((taxonomie) => <span key={taxonomie.id} className='side-bar-master__links'>{taxonomie.name}</span>) }
            </div>

            <div className='side-bar-master__about-us'>
              <div className='side-bar-master__container'>
                <p className='side-bar-master__title-about-us'>Nosotros</p>
              </div>

              <div className='side-bar-master__container-links'>
                <a className='side-bar-master__links'>Nuestra Historia</a>
                <a className='side-bar-master__links'>Faq's</a>
              </div>
            </div>
          </div>

          <div className='side-bar-master__container-social-media'>
            <a href="https://www.instagram.com/sumus.mx">
              <img className='side-bar-master__instagram' src={Instagram} alt="Icon Instagram" />
            </a>
            <a href="https://www.facebook.com/sumus.mx">
              <img className='side-bar-master__facebook' src={Facebook} alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
