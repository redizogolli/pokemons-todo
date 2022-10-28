import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <AppContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;