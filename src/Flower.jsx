import React from "react";
// same thing in App.jsx, I am importing IonIcon library that is used for React application
import IonIcon from "@reacticons/ionicons";

// this is the Flower function
// this function has three props: flower, favourites and handleFavClick
// flower stores the object details about a flower
// favourites is an array of favorite flower IDs
// handleFavClick is a function that handles the adding or removing a flower from favorites
function Flower({ flower, favourites, handleFavClick }) {
    return (
      // this is a div container for the flower card
      // it is stylized with tailwind
      // it has effects like hovering, scaling and even cursor changing when hovering over a card
      // it displays images of flowers with {flower.artworkUrl}
      // and calls for the flower's names with {flower.title}
      // I also made the iamges responsive, which would be taking the full width and adjusting its height automatically
        <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:cursor-pointer">
            <img 
                src={flower.artworkUrl} 
                alt={flower.title} 
                className="w-full h-auto" 
            />
            {/* this is basically the same as the top div */}
            {/* the div starts with a className with padding, displaying the {flower.title}
            as bold, and setting the price to 2 decimals with toFixed */}
            {/* below the p tag, there is a button with an icon of a shopping bad,
            which upon on click will turn red, if click again when it was red, will
            turn into an outline of the icon */}
            <div className="p-4">
                <h3 className="font-semibold text-lg">{flower.title}</h3>
                <p className="text-xl font-bold">${flower.price.toFixed(2)}</p>
                <button 
                    className="text-red-500 mt-2" 
                    onClick={() => handleFavClick(flower.id)}
                >
                    {favourites.includes(flower.id) ? (
                        <IonIcon name="bag" />
                    ) : (
                        <IonIcon name="bag-outline" />
                    )}
                </button>
            </div>
        </div>
    );
}
// this is the same as App.jsx
export default Flower;

// I don't know if this is working