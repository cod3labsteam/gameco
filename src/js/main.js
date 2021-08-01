// Load Bootstrap JS
import bootstrap from 'bootstrap'
import $ from "jquery";
import slick from 'slick-carousel'

// Load Styles
import '../scss/main.scss';

// App code
console.log(`Hello ${process.env.HELLO}`);

$('.our-team__members').slick();