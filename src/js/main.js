// Load Bootstrap JS
import bootstrap from 'bootstrap'
import $ from "jquery";
import slick from 'slick-carousel'

// Load Styles
import '../scss/main.scss';

// App code
console.log(`Hello ${process.env.HELLO}`);

$('.team__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100000,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false
  });