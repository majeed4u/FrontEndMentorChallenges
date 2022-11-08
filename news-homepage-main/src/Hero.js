import React from 'react';
import { CardImages } from './Data';
import logo from './images/logo.svg';
import desktop from './images/desktop.jpg';
import mobile from './images/mobile.jpg';

const Hero = () => {
  return (
    <main>
      <section className='main-section'>
        <div className='image-section'>
          <picture>
            <source media='(min-width:560px )' srcset={desktop} />

            <img src={mobile} alt='' />
          </picture>
        </div>
        <div className='heading-section'>
          <h1></h1>
          <div className='info-section'>
            <p></p>
            <button className='heading-btn'></button>
          </div>
          <section className='news'></section>
        </div>
      </section>
    </main>
  );
};

export default Hero;
