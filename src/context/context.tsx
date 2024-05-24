'use client'
import { Types } from "@/app/lib/definitions";
import React, { ReactNode, createContext, useContext, useState } from "react";

type pokemonContextType = {
  pokemonType: string;
  setNewPokemonType: (type: Types) => void;
};
// Crear el contexto
export const pokemonContext = createContext<pokemonContextType | undefined>(
  undefined
);

// Hook personalizado para usar el contexto
export const usePokemonContext = () => {
  const context = useContext(pokemonContext);
  if (!context) {
    throw new Error(
      "usePokemonContext debe ser utilizado dentro de un AuthProvider"
    );
  }
  return context;
};
// Proveedor del contexto
export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemonType, setPokemonType] = useState<string>("");

  const setNewPokemonType = (type: Types) => {
    setPokemonType(type.type.name);
  };

  return (
    <pokemonContext.Provider value={{ pokemonType, setNewPokemonType }}>
      {children}
    </pokemonContext.Provider>
  );
};
