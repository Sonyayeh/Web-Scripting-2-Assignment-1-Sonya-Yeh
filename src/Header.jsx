// same thing as App.jsx
import React from "react";
// this is to import an image called wisteriaImage from the assets folder
// this one is not in a URL form because apparently when I tried to do it,
// the image turns into a jpeg and I needed it to be transparent
import wisteriaImage from '/src/assets/image/wisteria.png'; 

// this is a Header component
const Header = () => {
    return (
        // this is to create the <header> element with a cyan background color
        <header className="bg-cyan-400">
            {/* the image is being called here with a width of 100 and auto for height */}
           <img 
            src={wisteriaImage} 
            alt="Wisteria" className="w-100 h-auto" />
            <div>
                {/* the <h1> contains the text Flower Shop, which is styled in different sizes as the screen shrinks */}
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white justify-center text-center mb-8">Flower Shop</h1>
                    {/* here is a list of "clickable" shopping options for audience (it doesn't take you anywhere btw)
                    each list items has the same size when shrinking, hovering color, cursor style, transition time for the color to change and margin bottom */}
                    <ul className="flex flex-row space-x-4 text-center justify-center mx-5">
                        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white hover:text-blue-500 transition duration-200 cursor-pointer underline mb-8">About Us</li>
                        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white hover:text-blue-500 transition duration-200 cursor-pointer underline mb-8">Bouquets</li>
                        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white hover:text-blue-500 transition duration-200 cursor-pointer underline mb-8">Home</li>
                    </ul>
            </div>
        </header>
    );
};
// same thing as App.jsx
export default Header;
