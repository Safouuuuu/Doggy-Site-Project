import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./Home.css";
import Carrousel from '../components/Carrousel';

const Home = () => {
  // This is the fetch for the task that you asked me to do, I chose to make a carrousel so that it would be better for my design and the user friendly interface, I hope you'll like it :)
  /*const [randomDogImage, setRandomDogImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setRandomDogImage(data.message));
  }, []);*/

  return (
  <div>
    <div className='header'>
      <div className='left-side'>
        <h1 className='logo'>Doggy Floppy</h1>
        <h1 className='title' style={{textAlign: "left"}}>Find your perfect friend <br/> and <br/>live your perfect life together</h1>
        <button className='btn-principal'><Link to={"/gallery"} style={{textDecoration: "none", color: 'white', fontFamily: 'Fira Sans', fontWeight: '500', fontSize: '2px'}}>Let's start</Link></button>
      </div>
      <Navbar/>
    </div>
    <Carrousel/>
  </div>
  );
};

export default Home;
