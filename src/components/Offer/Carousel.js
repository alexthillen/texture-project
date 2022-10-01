import React, { useEffect } from 'react'
import $ from 'jquery'; 
// import 'react-slick';
// import 'slick-carousel';
import 'slick/slick'
import 'slick/slick.scss'
import 'jquery/dist/jquery'
import './Carousel.scss'



function generateCarousel(logos) {
    var stack = [];
    for (var logo in logos) {
        stack.push(
        <div key={logo} className="slide height">
            <img className="imgAdjust" src={logos[logo]} alt="" />
        </div>);
    }
    return stack;
}

export default function Carousel(props) {

    useEffect(() => {
        // Update the document title using the browser API
        carouselFunc();
        }, []);

  return (
    <div className="carousel mx-2">
      {generateCarousel(props.logos)}
    </div>
  )
}


export const carouselFunc = () => $(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  });