import React from 'react';
import { TechNews, News } from './Data';
import logo from './images/logo.svg';
import desktop from './images/desktop.jpg';
import mobile from './images/mobile.jpg';

const Hero = () => {
  return (
    <main>
      <section className='main-section'>
        <div className='image-section'>
          <picture>
            <source media='(min-width:640px )' srcset={desktop} />

            <img src={mobile} alt='' />
          </picture>
        </div>
        <div className='heading-section'>
          <h1>The Bright Future of Web 3.0?</h1>
          <div className='info-section'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='heading-btn'>Read more</button>
          </div>
          <section className='news'>
            <h2>New</h2>
            {News.map((newsitem) => {
              return (
                <article className='news-article' key={newsitem.id}>
                  <h3>{newsitem.title}</h3>
                  <p>{newsitem.text}</p>
                </article>
              );
            })}
          </section>
        </div>
      </section>
      <section className='tech-news'>
        {TechNews.map((tech) => {
          const { id, num, image, title, text } = tech;
          return (
            <article className='article-tech-news' key={id}>
              <div className='news-image'>
                <img src={image} alt={title} />
              </div>
              <div className='news-info'>
                <span>{num}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Hero;
