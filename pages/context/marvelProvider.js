import React, { useState, useEffect, createContext } from 'react';
import { node } from 'prop-types';
import axios from 'axios'

const MarvelContext = createContext();

function MarvelProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);
  const contextValue = {
    characters,
    setCharacters,
    series,
    stories,
  };

  useEffect(() => {
       axios.get('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then((response) => setStories(response.data.data.results));
  }, [stories]);

  return (
    <MarvelContext.Provider value={ contextValue }>
      {children}
    </MarvelContext.Provider>
  );
}


export { MarvelProvider, MarvelContext };
