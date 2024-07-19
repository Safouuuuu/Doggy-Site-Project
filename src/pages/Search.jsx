import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';

const Search = () => {
    const [breed, setBreed] = useState('');
    const [breedImages, setBreedImages] = useState([]);
    const [error, setError] = useState('');
    const [lastBreed, setLastBreed] = useState('');

    const handleInputChange = (e) => {
        setBreed(e.target.value);
    };

    const handleSearch = () => {
        // If the user doesn't enter the breed name, then we'll stop the function here
        if (!breed) {
            setError('Please enter a breed');
            return;
        }
        if (breed == lastBreed){
            return;
        }
        setLastBreed(breed);

        // We clear the variables in order to avoid showing them in screen after the next research
        setError('');
        setBreedImages([]);

        // We fetch all the images that affiliate to the breed variable, the name has to be the exact one tho
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(response => {
                // If the breed name entered exists in the branch (the path is correct), then we'll set the data we got normally, if thr breed is incorrect, we throw an error and catch it after to set it in our variable error
                if (response.ok === false) {
                    throw new Error('Breed not found or does not exist');
                }
                return response.json();
            })
            .then(data => setBreedImages(data.message))
            .catch(err => setError(err.message));
    };

    return (
        <div>
            <Navbar2/>
            <h2>Search for the breed you want, if we have it, you adopt it !</h2>
            <input type="text" value={breed}
                onChange={handleInputChange}
                placeholder="Enter the name of the breed"
            />
            <button onClick={handleSearch}>Search</button>
            {/* The error variable is either set or not, if it is, it'll be shown in screen*/}
            {error && <p>{error}</p>}
            <div>
                {breedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Breed ${breed}`} />
                ))}
            </div>
        </div>
    );
};

export default Search;
