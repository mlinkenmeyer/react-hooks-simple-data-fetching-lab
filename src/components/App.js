// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((dogs) => {
        setDogImages(dogs.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      <img src={dogImages} alt="A Random Dog" />
    </div>
  );
}

export default App;
