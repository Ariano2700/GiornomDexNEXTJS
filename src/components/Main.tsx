"use client";
import { Pokemon } from "@/app/lib/definitions";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
//{ pokemon }: { pokemon: Pokemon }
function Main({ pokemon }: { pokemon: Pokemon }) {
//   useEffect(() => {
//     const apiResponse = async () => {
//       const randomPoke = Math.floor(Math.random() * (807 - 1) + 1);
//       const res = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${randomPoke}`
//       );
//       const pokemon: Pokemon = await res.json();
//       console.log("ID del Pokémon:", pokemon.id);
//       console.log("Nombre de la especie del Pokémon:", pokemon.species.name);
//       console.log(
//         "Sprite frontal del Pokémon:",
//         pokemon.sprites.other.home.front_default
//       );
//       console.log("Altura del Pokémon:", pokemon.height);
//       console.log("Habilidades del Pokémon:", pokemon.abilities);
//       console.log("Estadísticas del Pokémon:", pokemon.stats);
//       console.log("Tipos del Pokémon:", pokemon.types);
//       console.log("Peso del Pokémon:", pokemon.weight);
//     };
//     apiResponse();
//   }, []);
  return (
<main>
  <section className="containerMain">
    <div className="subContainerMain">
      {/* CONTENEDOR IZQUIERDA */}
      <div className="leftContainer">
        <div className="bgID">{pokemon.id}</div>
        <div className="containerTypeName">
          <div id="type_poke">{pokemon.types.map((type, index) => (
            <span key={index}>{type.type.name}</span>
          ))}</div>
          <div className="namePokemon">{pokemon.species.name}</div>
        </div>
      </div>
      {/* CONTENEDOR IZQUIERDA */}

      {/* CONTENEDOR DERECHA */}
      <div className="rightContainer">
        <div className="imgPoke">
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.species.name} />
        </div>
        <div className="statsContainer">
          <section className="caja-padre">
            <div className="container">
              {pokemon.stats.map((stat, index) => (
                <div key={index} className="skills">
                  <div className="detalles">
                    <span>{stat.stat.name}</span>
                    <span className={`span${stat.stat.name.toUpperCase()}`}>{stat.base_stat}</span>
                  </div>
                  <div className="menu">
                    <div id={`${stat.stat.name.toLowerCase()}-menu`}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* CONTENEDOR DERECHA */}
    </div>
    <div className="subContainerStats">
      {/* Aquí puedes añadir más elementos según tus necesidades */}
    </div>
  </section>
</main>
  );
}

export default Main;