// this is the same as App.jsx
import React from "react";

// this is a Footer component that includes the copyright text that is in blueand responsive font sizes when scaling
// the text is styled so it will be in the center of the page no matter how the page is being stretched 
const Footer = () => {
    return (
        <footer className="text-blue-500 py-4">
            <div className="container mx-auto text-center">
                <p className="text-lg text-bold lg:text-base">&copy; 2024 Flower Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};
// same thing as App.jsx
export default Footer;
