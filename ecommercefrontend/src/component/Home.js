import React from 'react';
import heroImage from '../asserts/heroImage.jpg';
import ProductOptions from '../component/ProductOptions';
import image1 from "../asserts/timImage.jpg"


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
                <p className="text3"><i>Most Popular</i></p>
            </div>

            <div className="popular-section">
                <div className="item">
                    <img src={require("../asserts/galaImage.jpg")} alt="Midnight gala attire" />
                    <p className="text4">Evening Dresess</p>
                    <p className="text5">Midnight Gala Maxi Dress</p>
                    <p className="price">$175.00</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={image1} alt="Timeless classic attire"/>
                    <p className="text4">Work & amp</p>
                    <p className="text5">Timeless Classic Collection</p>
                    <p className="price">$124.90</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={require("../asserts/bohemianImage.jpg")} alt="Bohemian Rhapsody Attire" />
                    <p className="text4">Casual</p>
                    <p className="text5">Bohemian Rhapsody Attire</p>
                    <p className="price">$145.50</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={require("../asserts/suitImage.jpg")} alt="Power suit attire" />
                    <p className="text4">Casual</p>
                    <p className="text5">Power Suit Ensemble</p>
                    <p className="price">$125.50</p>
                    <ProductOptions />
                </div>
            </div>

            <div className="home-container3">
                <img src={require("../asserts/background2.jpg")} className="bg2" alt="Background 2" />
                <img src={require("../asserts/bagImage.jpg")} className="bag" alt="model with bag" />
                <div className="text-container">
                    <p class="text6"><i>Explore Our Exquisite Bag 
                        Collection Now!</i></p>

                    <div className="page-button2">
                        <button class="button-text2" type="button">VIEW COLLECTION</button>
                    </div>
                </div>
            </div>

            <div className="home-container4">
                <div className="text-container2">
                    <p className="text7">WORK & OFFICE ATTIRE</p>
                    <p className="text8"><i>Professional Pinstripe<br />Blazers Collection</i></p>
                    <p className="text9">Elevate your workwear with our Professional Pinstripe Blazers Collection<br />where tailored sophistication meets modern confidence<br />for a powerfully polished office look.</p>
                    <div className="page-button3">
                        <button class="button-text3" type="button">SHOP NOW</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={require("../asserts/blazerImage.jpg")} className="blazerPic" alt="model wearing blazer" />
                </div>
            </div>

            <div className="home-container5">                
                <img src={require("../asserts/background4.jpg")} className="bg3" alt="Background 3" />
                <img src={require("../asserts/rainbowImage.jpg")} className="rainbow" alt="model wearing rainbow" />
                <div className="text-container3">
                    <br />
                    <br />
                    <p className="text10"><i>Discover The Allure Of<br />Fashion Reinvented!</i></p>
                    <p className="text11">Dive into a world of style with our latest collection! Shop now<br />and redefine your wardrobe narrative!</p>
                    <br />
                    <br />
                    <div className="page-button4">
                        <button class="button-text4" type="button">SHOP NOW</button>
                    </div>
                </div>
            </div>

            <div className="home-container6">
                <p className="text3"><i>Newest Products</i></p>
            </div>

            <div className="popular-section">
                <div className="item">
                    <img src={require("../asserts/pinstripeImage.jpg")} alt="Pinstripe attire" />
                    <p className="text4">Formal wear</p>
                    <p className="text5">Professional Pinstripe Blazer</p>
                    <p className="price">$109.00</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={require("../asserts/joggersImage.jpg")} alt="Joggers" />
                    <p className="text4">Work & amp</p>
                    <p className="text5">Relaxed Fit Joggers</p>
                    <p className="price">$250.00</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={require("../asserts/urbanImage.jpg")} alt="Urban chic Attire" />
                    <p className="text4">Urban chic</p>
                    <p className="text5">Urban Chic Ensemble</p>
                    <p className="price">$224.95</p>
                    <ProductOptions />
                </div>

                <div className="item">
                    <img src={require("../asserts/weekendImage.jpg")} alt="weekend attire" />
                    <p className="text4">Casual</p>
                    <p className="text5">Weekend Wanderlust Wardrobe</p>
                    <p className="price">$119.90</p>
                    <ProductOptions />
                </div>
            </div>

            <div className="home-container7">
                <img src={require("../asserts/smileImage.jpg")} className="bg4" alt="two women smiling" />
                <div className="stars">★ ★ ★ ★ ★</div>
                <div className="text-container4">
                <p className="text12"><i>"KARA is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment to sustainable fashion. What truly sets KARA apart is their customer-centric approach.”</i></p>
                <br />
                <br />
                <p className="text13">SARAH M., DEVOTED KARA FAN</p>
                </div>
            </div>

                <div className="feature-section">

                    <div className="features">
                        <div className="icon">&#128274;</div>
                        <p className="text14">Secure Payments</p>
                        <p className="text15">Shop with confidence knowing that your transactions are safeguarded.</p>
                    </div>

                    <div className="features">
                        <div className="icon">&#128666;</div>
                        <p className="text14">Free Shipping</p>
                        <p className="text15">Shopping with no extra charges – savor the liberty of complimentary shipping on every order.</p>
                    </div>

                    <div className="features">
                        <div className="icon">&#8630;</div>
                        <p className="text14">Easy Returns</p>
                        <p className="text15">With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
                    </div>

                    <div className="features">
                        <div className="icon">⚲</div>
                        <p className="text14">Order Tracking</p>
                        <p className="text15">Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
                    </div>

                </div>

            <div className="home-container8">
                 <img src={require("../asserts/sunImage.jpg")} className="bg5" alt="woman in the sun" />
                 <div className="text-container5">
                    <p className="text16">EXPLORE</p>
                    <p className="text17">Elevate Your Wardrobe, Embrace Timeless Style!</p>
                    <p className="text16">Explore our collections today and experience the joy of fashion. Shop now for the<b />epitome of chic sophistication!</p>
                    <div className="page-button5">
                        <button class="button-text5" type="button">SHOP NOW</button>
                    </div>
                 </div>
            </div>

            <div className="parallax"></div>

        </div>


    );
}
export default Home;
