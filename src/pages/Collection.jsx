import React, { useEffect, useState } from 'react';
import Navbar2 from '../components/Navbar2';

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
      <div className="row">
        {dogImages.map((image, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <img src={image} alt="Dog" className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
