import React from 'react';
import "../Footer/footer.css";

const quicklink1 = [
    {
        path: "#",
        display: "Marketing"

    },
    {
        path: "#",
        display: "Commerce",
    },
    {
        path: "#",
        display: "Analytics",
    }
];

const quicklink2 = [
    {
        path: "#",
        display: "Pricing"

    },
    {
        path: "#",
        display: "Documentation",
    },
    {
        path: "#",
        display: "Guides",
    }
];

const quicklink3 = [
    {
        path: "#about",
        display: "About"

    },
    {
        path: "#",
        display: "Career",
    },
    {
        path: "#blog",
        display: "Blog",
    }
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer_logo'>
                        <h2>Digital Planet</h2>
                        <p className='description'>Grow Further With Us!</p>
                        <p className='small_text description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, neque doloremque.</p>
                    </div>
                    <div className='footer_quick-links'>
                        <h2 className='quick-links_title'>Solutions</h2>
                        <ul className='quick-links'>
                            {
                                quicklink1.map((item, index) => (
                                    <li className='quick-link_items' key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h2 className='quick-links_title'>Support</h2>
                        <ul className='quick-links'>
                            {
                                quicklink2.map((item, index) => (
                                    <li className='quick-link_items' key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h2 className='quick-links_title'>Company</h2>
                        <ul className='quick-links'>
                            {
                                quicklink3.map((item, index) => (
                                    <li className='quick-link_items' key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright {year}, by Samdigitalplanet. All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;