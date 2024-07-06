import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Carrousel.css';

const Carrousel = () => {
    // Here I'll declare my constant to hold my fetched images
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        // And here is my fetch for 6 random images from the API to make my carrousel
        fetch('https://dog.ceo/api/breeds/image/random/6')
            .then(response => response.json())
            .then(data => setDogImages(data.message));
    }, []);

    const settings = {
        // These settings represent how the carrousel will be displayed, autoplay for example means that it will slide by itself, so It'll be needless to do it manually
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="carrousel-container">
            <Slider {...settings}>
                {dogImages.map((image, index) => (
                    <div key={index} className="carrousel-slide">
                        {/* Each image fetched will be displayed separately in the carrousel */}
                        <img src={image} alt={`Dog ${index}`} className="carrousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrousel;
