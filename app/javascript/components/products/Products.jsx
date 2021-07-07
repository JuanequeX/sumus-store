import React from 'react'
import Tshirt from '../../assets/t-shirt-product.png';
import Tote from '../../assets/tote-image.png'
import products from './products.scss';

const Products = () => {
  return (
    <section className="container-products">
      <div className="container-products__tshirt">
        <img className="container-products__image-tshirt" src={Tshirt} alt="T-shirt basica"/>
        <div className="container-products__card-tshirt">
          <h2 className="container-products__title-tshirt">Sumus t-shirt</h2>
          <p className="container-products__subtitle-tshirt">Diseñada y confeccionada con patrones unicos para brindar mayor comodidad</p>
          <button className="container-products__button-tshirt">COMPRAR T-SHIRT</button>
        </div>
      </div>
      <div className="container-products__tote">
      <img className="container-products__image-tote" src={Tote} alt="T-shirt basica"/>
        <div className="container-products__card-tote">
          <h2 className="container-products__title-tote">Tote bag</h2>
          <p className="container-products__subtitle-tote">Tote confeccionada con tela resistente que brinda un uso rudo.</p>
          <button className="container-products__button-tote">COMPRAR TOTE BAG</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
