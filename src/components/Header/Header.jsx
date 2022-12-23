import React, { useEffect, useRef } from 'react';
import './header.style.css';

const nav_links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#service',
        display: 'Service',
    },
    {
        path: '#project',
        display: 'Projects',
    },
    {
        path: '#blog',
        display: 'Blogs',
    }
]

const Header = ({ theme, toggleTheme }) => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classlist.add("header_shrink");
        } else {
            headerRef.current.classlist.remove('header_shrink');
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>DigiPlanet</h2>
                        {/* <p>Grow Further With Us</p> */}
                    </div>
                    {/* ========= Navigation =============*/}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {
                                nav_links.map((item, index) => (
                                    <li className="menu_item" key={index}><a href={item.path} onClick={handleClick} className="menu_link">
                                        {item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ========= Light mode =============*/}
                    <div className="light_mode">
                        <span onClick={toggleTheme}>{
                            theme === 'light-theme' ? <span><i className='ri-moon-line'>Dark</i></span> : <span><i class="ri-sun-line">Light Mode</i></span>
                        }</span>
                    </div>
                    <span className='mobile_menu' onClick={toggleMenu}><i className="ri-menu-line"></i></span>
                </div>
            </div>
        </header>
    );
};

export default Header;

