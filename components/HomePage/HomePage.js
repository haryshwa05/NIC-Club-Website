"use client";

import React, { useEffect } from 'react';
import './HomePage.css'; // Ensure the CSS file path is correct

const HomePage = () => {
    useEffect(() => {
        const text = document.getElementById('text');
        const foreground = document.getElementById('hill2');

        const handleScroll = () => {
            let value = window.scrollY;

            // Adjust for text to move down on scroll down, up on scroll up
            if (value <= window.innerHeight) {
                text.style.marginTop = value * 2.5 + 'px';  // Adjusting the multiplier to move down
                foreground.style.marginTop = value * 1.5 + 'px';  // This can remain the same for the foreground effect
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        const navigation = document.querySelector('.navigation');
        const burger = document.querySelector('.burger');
        navigation.classList.toggle('active');
        burger.classList.toggle('active');
    };

    return (
        <div>
            <section className="parallax akira-expanded">
                <img src="/bg.png" id="hill1" alt="Background" />
                <h2 id="text" >NEXTGEN INTELLIGENCE<br />CLUB</h2>
                <img src="/fg.png" id="hill2" alt="Foreground" />
            </section>
        </div>
    );
};

export default HomePage;
