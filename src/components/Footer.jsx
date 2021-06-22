import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    
    return(
        <footer className="footer">
            <p>Made with React & CSS Grid</p>
            <p>ⓒ {year} Jackie Leary</p>
        </footer>
    );
}

export default Footer;