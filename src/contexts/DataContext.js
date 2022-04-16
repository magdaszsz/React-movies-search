import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [favorited, setFavorited] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setFavorited(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(favorited));
  }, [favorited]);

  function addToFavorites(id) {
    setFavorited((prev) => [...prev, id]);
  }

  function removeFromFavorited(id) {
    const filtered = favorited.filter(el => el != id)
    setFavorited(filtered)
    
  }

 
  return (
    <DataContext.Provider value={{ favorited, addToFavorites, removeFromFavorited}}>
     
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
