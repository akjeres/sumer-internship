import React from "react";
import insta_logo from './img/instagram.svg';

function Grid() {
    return (
        <section className="header_grid">
                <div className="header_grid__item item-01"></div>
                <div className="header_grid__item item-02"></div>
                <div className="header_grid__item item-03"></div>
                <div className="header_grid__item item-04"></div>
                <div className="header_grid__item item-05"></div>
                <div className="header_grid__item item-06"></div>
                <div className="header_grid__item item-07"></div>
                <div className="header_grid__item item-08"></div>
                <div className="header_grid__item item-09"></div>
                <div className="header_grid__item item-10"></div>
                <div className="header_grid__item item-11"></div>
                <div className="header_grid__item item-12"></div>
                <a href="https://www.instagram.com/explore/tags/hotdogs/" className="header_grid__insta" target="_blank" rel="noopener noreferrer">
                    <img className="insta_logo" src={insta_logo} alt="Instagram Logo" />
                    <span className="insta_text">#hotdogs</span>
                </a>
        </section>
    );
  }


export default Grid;