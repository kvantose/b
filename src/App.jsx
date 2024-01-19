import './App.css'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ImageGallery from "react-image-gallery";



function Title() {
  return (
    <>
      <div className="header">
        <a href="#default" class="logo">ДСТ</a>
        <div className="header-right">
          <a href="#contact" className='navigation'>Контакт</a>
          <a href="#about" className='navigation'>О нас</a>
          <a href="#order" className='navigation'>Купить</a>
        </div>
      </div>

      <div className='title'>
        <div className='title-left'>
          <p className='text'>Мы - профессионалы в сфере доставки
          рыбы и морепродуктов по всей России.
          Независимо от того, в каком регионе вы находитесь,
          мы обеспечим быструю и надежную доставку прямо к вашей двери.</p>
          
          <Button variant="outlined"
          sx={{color: "white", fontSize: "28px", fontFamily: "TT Travels",
          border: "3px solid white", width: "700px", height: "100px"}}>
          Оставить заявку</Button>
        </div>
        <div className='slider'></div>
      </div>
    </>
  );
}


  const images = [
    {
      original: "img/1.png",
      thumbnail: "img/1.png",
    },
    {
      original: "img/2.png",
      thumbnail: "img/2.png",
    },
    {
      original: "img/3.png",
      thumbnail: "img/3.png",
    },
  ];

function Slider() {
  return (
    <ImageGallery items={images} sx={{width: "100px", height: "100px"}} />
  )
}



const App = () => {
  return (
    <div>
      <Title />
      <Slider />
    </div>
  );
};


export default App;
