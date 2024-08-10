import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-content">
                <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
            </div>
            <div className="right-content">
                <p className="mb-0">Contact us: <a href="mailto:info@yourcompany.com" className="text-light">info@yourcompany.com</a></p>
                <p className="mb-0">Follow us on <a href="https://twitter.com/yourcompany" className="text-light" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/yourcompany" className="text-light" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            </div>
        </footer>
    );
};

export default Footer