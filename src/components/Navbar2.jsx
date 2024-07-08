import React from "react";
import "./Navbar2.css";
import {Link} from "react-router-dom";

const Navbar2 = () => {
    return (
        <nav className="doggy-nav2">
            <ul className="doggy-nav-list2">
                <li className="doggy-nav-btn2"><Link className="doggy-nav-link2" to="/">Home</Link></li>
                <li className="doggy-nav-btn2"><Link className="doggy-nav-link2" to="/collection">Our dogs</Link></li>
                <li className="doggy-nav-btn1"><Link className="doggy-nav-link2" to="/search">Breed</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar2;