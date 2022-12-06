import React from "react";

const SoldContext = React.createContext({
  soldProducts: [],
  updateSoldProducts: (id) => null,
});

export const FavoriteProvider = SoldContext.Provider;

export default SoldContext;
