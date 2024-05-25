"use client";
import Image from "next/image";
import logotype from "../../public/logotype.png";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Pokemon } from "./lib/definitions";
import { useEffect, useState } from "react";
import { usePokemonContext } from "@/context/context";
import Loader from "@/components/Loader";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const {
    pokemonType,
    setNewPokemonType,
    searchValue,
    loading,
    setNewLoading,
  } = usePokemonContext();

  useEffect(() => {
    const fetchData = async () => {

      if (!searchValue) {
        const randomPoke = Math.floor(Math.random() * (807 - 1) + 1);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomPoke}`
        );
        const pokemonData: Pokemon = await res.json();
        setNewPokemonType(pokemonData.types[0]);
        setPokemon(pokemonData);
        setNewLoading(false);
      }
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}`
      );
      const pokemonData: Pokemon = await res.json();
      setNewPokemonType(pokemonData.types[0]);
      setPokemon(pokemonData);
    };

    fetchData();
  }, [searchValue]);


  return (
    <div className={`${pokemonType}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {pokemon && <Main pokemon={pokemon} />}
        </>
      )}
    </div>
  );
}
