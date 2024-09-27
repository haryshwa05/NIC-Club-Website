"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './Navbar.css';

const Navbar = ({ isMainPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (section) => {
    if (!isMainPage) {
      router.push(`/#${section}`);
    }
    setIsOpen(false); // Close the sidebar after navigating
  };

  const NavItem = ({ href, to, children }) => {
    const hoverClass = isScrolled ? 'hover-black' : 'hover-white';

    if (href === '/genesis') {
      return (
        <Link href={href} className={`nav-link ${hoverClass}`} onClick={() => setIsOpen(false)}>
          {children}
        </Link>
      );
    }

    return isMainPage && to ? (
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className={`nav-link ${hoverClass} ${activeLink === to ? 'active' : ''}`}
        onSetActive={() => handleSetActive(to)}
        onClick={() => setIsOpen(false)} // Close the sidebar when navigating on mobile
      >
        {children}
      </ScrollLink>
    ) : (
      <a
        onClick={() => handleNavClick(to)}
        className={`nav-link ${hoverClass} ${activeLink === href ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </a>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between lg:justify-center">
        <div className="absolute top-5 left-8 flex-shrink-0">
          <Link href="/">
            <Image
              src="/nic_newlogo.png"
              loading="eager"
              alt="Logo"
              width={150}
              height={40}
              className="object-contain rounded-md"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <div
            className={`rounded-full p-4 px-14 transition-transform duration-300 ease-in-out ${isScrolled ? 'bg-white bg-opacity-90 shadow-md text-black' : 'bg-black text-white'} ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}
          >
            <div className="flex items-center space-x-2 akira-expanded text-sm">
              <NavItem href="/" to="home">HOME</NavItem>
              <NavItem href="/" to="about">ABOUT</NavItem>
              <NavItem href="/genesis">GENESIS</NavItem>
              <NavItem href="/" to="team">THE CREW</NavItem>
              <NavItem href="/" to="gallery">GALLERY</NavItem>
            </div>
          </div>
        </div>

        <div className="lg:hidden ml-auto mx-4 mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/7/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden w-2/3 shadow-lg`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center p-4 space-y-4 text-white">
          <NavItem href="/" to="home">HOME</NavItem>
          <NavItem href="/" to="about">ABOUT</NavItem>
          <NavItem href="/genesis">GENESIS</NavItem>
          <NavItem href="/" to="team">THE TEAM</NavItem>
          <NavItem href="/" to="gallery">GALLERY</NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
