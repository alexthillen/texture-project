import React, { useEffect } from 'react'
import $ from 'jquery';
import 'react-slick';
import 'slick-carousel';
import 'jquery/dist/jquery'
import './Carousel.scss'

function generateCarousel(logos) {
  var stack = [];
  for (var logo in logos) {
    stack.push(
      <div key={logo} className="slide height py-auto mb-4 mt-2">
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
    <div>
      <h6 className='my-3 border-top border-2 pt-2'>{props.text}</h6>
      <div className="carousel mx-2">
        {generateCarousel(props.logos)}
      </div>
    </div>
  )
}


export const carouselFunc = () => $(document).ready(function () {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
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