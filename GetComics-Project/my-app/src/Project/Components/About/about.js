import React from 'react';
import '../styles/aboutinfo.css';
import ebook1 from './asset/ebook1.png';
import ebook2 from './asset/ebook2.jpg';


const About = () => {
    return (
        <section className='about-section'>
            <section className='sec-1'>
                <div className="about-container">
                    <div className='about-img'>
                        <img src={ebook1} />
                    </div>
                    <div className='about'>
                        <h1>About Get Books</h1>
                        <p>
                            Welcome to Get Books, your number one source for all things books. We're dedicated to giving you the very best of literature, with a focus on providing a diverse selection, ensuring accessibility for all readers, and maintaining the highest standards of quality. Whether you're looking for timeless classics, contemporary bestsellers, or hidden gems from emerging authors, we strive to meet all your literary needs. Our commitment is to foster a love of reading by offering a wide range of genres and formats, making it easy for everyone to find their next great read. Thank you for choosing Get Books, where your literary journey begins.
                        </p>
                    </div>
                </div>
            </section>
            <section className='sec-2'>
                <div className="about-container">
                    <div className='about'>
                        <h1>Our Mission</h1>
                        <p>
                            At Get Books, our mission is to foster a love for reading by offering a diverse selection of books that cater to all tastes and preferences. We believe in the transformative power of literature to inspire, educate, and entertain individuals of all ages and backgrounds. Our goal is to create a welcoming and inclusive community for book lovers where everyone can discover and share their passion for reading.
                        </p>
                    </div>
                    <div className='about-img'>
                        <img src={ebook2} />
                    </div>
                </div>
            </section>

        </section>
    );
};

export default About;
