import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import chienBerger from "../images/Chien-Berger.png";
import chienFenetre from "../images/Chien-Fenetre.png";
import chienMaitre from "../images/Chien-Maitre.png";

const Navbar = () => {
    return (
        <nav className="doggy-nav">
            <ul className="doggy-nav-list">
                <li className="doggy-nav-btn"><Link className="doggy-nav-link" to="/">Home</Link></li>
                <li className="doggy-nav-btn"><Link className="doggy-nav-link" to="/collection">Our dogs</Link></li>
                <li className="doggy-nav-btn"><Link className="doggy-nav-link" to="/search">Breed</Link></li>
            </ul>
            {/*
            <div className="doggy-images">   
            <img src={chienBerger} alt="A dog" className="dog1"/>
            <img src={chienFenetre} alt="A dog on a balcony" className="dog2"/>
            <img src={chienMaitre} alt="A dog with it's master" className="dog3"/>
            </div>
            */}
        </nav>
    )
}

export default Navbar;