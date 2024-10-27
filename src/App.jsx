
// I am importing React from React
// same thing goes to the other imports, as I am grabbing them from the other
// jsx files
import React, { useState } from "react";
import Flower from "./Flower.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Items from "./data/Items.json";

// calling the function for App
function App() {
  // I am setting up two pieces of state in a React component
  // the first one is called flower, which initializes with Items
  const [flower, setFlower] = useState(Items);
  // this one is storing a list of favorite items with an empty array
  const [faves, setFaves] = useState([]);

  // in this function, the handleFavClick triggers the flower's favorite function
  // if the ite is already in faves, it removes it
  // otherwise, it adds the flowerID to the favorites list
  const handleFavClick = (flowerID) => {
    if (faves.includes(flowerID)) {
      const newFaves = faves.filter(singleFav => flowerID !== singleFav);
      setFaves(newFaves);
    } else {
      setFaves([...faves, flowerID]);
    }
  }

  // this returns a React component that includes a header and a footer
  // both header and footer are stylized with tailwind
  // each flower component receives its data, current favorites and the toggle for it(handleFavClick)
  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-white to-cyan-400 min-h-screen p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flower.map(singleFlower => (
            <Flower key={singleFlower.id} flower={singleFlower} favourites={faves} handleFavClick={handleFavClick} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

// this is to export the App component as the default export of the module
// it is done so it can be imported for other files
export default App;
