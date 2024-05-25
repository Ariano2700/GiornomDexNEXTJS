"use client";
import { Types, pokemonContextType } from "@/app/lib/definitions";
import React, { ReactNode, createContext, useContext, useState } from "react";

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
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<pokemonContextType["loading"]>(true);

  const setNewLoading = (loading: boolean) => {
    setLoading(loading);
  } 
  const setNewPokemonType = (type: Types) => {
    setPokemonType(type.type.name);
  };

  const setNewSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <pokemonContext.Provider
      value={{ pokemonType, setNewPokemonType, setNewSearchValue, searchValue, loading, setNewLoading }}
    >
      {children}
    </pokemonContext.Provider>
  );
};
