import React, { useEffect, useState } from 'react';
import Navbar2 from '../components/Navbar2';
import "./Collection.css";

const Collection = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
      .then(response => response.json())
      .then(data => setDogImages(data.message));
  }, []);

  return (
    <div className="text-center">
        <Navbar2/>
      <h1>Wanna see more about our precious dogs ?</h1>
      <h5>This gallery shows some of the most friendly, awsome and incredible companions</h5>
      <div className="doggy-images">
        {dogImages.map((image, index) => (
          <div className="doggy-slide" key={index}>
            <img src={image} alt={`Dog ${index}`} className="doggy-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
