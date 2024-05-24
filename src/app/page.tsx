'use client'
import Image from "next/image";
import logotype from "../../public/logotype.png";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Pokemon } from "./lib/definitions";
import { useEffect, useState } from "react";
import { usePokemonContext } from "@/context/context";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { pokemonType,setNewPokemonType } = usePokemonContext();
  useEffect(() => {
    const fetchData = async () => {
      const randomPoke = Math.floor(Math.random() * (807 - 1) + 1);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
      const pokemonData: Pokemon = await res.json();
      setNewPokemonType(pokemonData.types[0]);
      setPokemon(pokemonData);
    };

    fetchData();
  }, []);

  return (
    <div className={`${pokemonType}`}>
      <Header />
      {pokemon && <Main pokemon={pokemon} />}
    </div>
  );
}
