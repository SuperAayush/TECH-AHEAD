import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import '../Styling/Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="/">TECH-AHEAD</a></p>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Techs</a></p>
          <p><a href="#possibility">Roadmaps</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Blogs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="/login"><button type="button">Log In</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Sign In</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
