// Load Bootstrap JS
import bootstrap from 'bootstrap'
import slick from 'slick-carousel'

// Load Styles
import '../scss/main.scss';

// App code
console.log(`Hello ${process.env.HELLO}`);

$(".our-team__members").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});