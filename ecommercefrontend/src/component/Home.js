import React from 'react';
import heroImage from '../asserts/heroImage.jpg';

function Home() {
    return (
        <div
            className="home-container"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <div className="topnav">
                <nav>
                    <a href="#home"><b>Home</b></a>
                    <a href="#shop"><b>Shop</b></a>
                    <a href="#about"><b>About Us</b></a>
                    <a href="contact"><b>Contact Us</b></a>
                </nav>
                <h1 className="nav-title">K A R A</h1>
                <div className="search-container">
                    <input type="text" placeholder="Search.." />
                </div>
            </div>

            <div className="center-content">
                <p class="text1">CASUAL & EVERYDAY</p>
                <p class="text2"><i>Effortlessly Blend Comfort <br /> & Style!</i></p>
                <p class="text1">Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile <br /> denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</p>
            </div>

            <div className="page-button">
                <button class="button-text" type="button">VIEW COLLECTION</button>
            </div>

            <div class="parallax"></div>
           <div className="home-container2">
                <p class="text3"><i>Most Popular</i></p>
           </div>
                <p>Timeless Classic Collection</p>
                <br />
                <p>Bohemian Rhapsody Attire</p>
                <br />
                <p>Midnight Gala Maxi Dress</p>
                <br />
                <p>Power Suit Ensemble</p>  
           <div class="parallax"></div>

            
        </div>


    );
}
export default Home;
