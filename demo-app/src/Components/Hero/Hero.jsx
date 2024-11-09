import React, { useState, useEffect } from 'react';
import './Hero.css';  // Import the CSS for styling

const Hero = () => {
    const paragraphs = [
        'OrderU automates Your Food Ordering Process.',
        'Spend Less Time on taking Orders and More on food value.',
        'OrderU Makes Food Ordering Easier, Faster, and More Efficient.',
        'Running a restaurant is hard. Let us help you simplify it.'

    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        }, 6000); // Change paragraph every 6 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-section">
            {/* Hero Title and Caption */}
            <div className="hero-title">
                <h1>Welcome to OrderU</h1>
                <p>Your food ordering process made simple.</p>
            </div>

            {/* Message Display */}
            <div className="hero-message mb-4">
                <div className="text-container">
                    <div className="paragraphs">
                        {paragraphs.map((text, i) => (
                            <div key={i} className={`paragraph ${index === i ? 'slide-in' : 'slide-out'}`}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Button */}
            <div className="cta-section">
                {/* Scroll to the next section with anchor link */}
                <a href="#other-sections" className="cta-button">Explore</a>
            </div>
        </div>
    );
};

export default Hero;
