import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assests/edclogo.png";
import { Link } from "react-scroll";


import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" className="" />
                </a>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: "#ffffff" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "#ffffff" }} />
                    )}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            Team
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="achievements"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            Achievements
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="faqs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-white cursor-pointer transition-colors hover:text-[#1E3A8A]"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
