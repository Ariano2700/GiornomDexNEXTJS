"use client";
import { Pokemon } from "@/app/lib/definitions";

//{ pokemon }: { pokemon: Pokemon }
function Main({ pokemon }: { pokemon: Pokemon }) {
  return (
    <main>
      <section className="">
        <div className="flex justify-center">
          {/* CONTENEDOR IZQUIERDA */}
          <section className="flex items-center justify-between w-[90%] max-lg:flex max-lg:flex-col">
            <div className="flex flex-col max-lg:items-center">
              <div className="max-sm:text-7xl font-bold text-9xl opacity-50 text-white">
                #
                {pokemon.id < 10
                  ? `00${pokemon.id}`
                  : pokemon.id < 100
                  ? `0${pokemon.id}`
                  : pokemon.id}
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-4">
                  {pokemon.types.map((type, index) => (
                    <img
                      key={index}
                      src={`/TypesIcon/${type.type.name}.svg`}
                      alt={`type ${type.type.name}`}
                      className={`img-type ${type.type.name} max-sm:w-11`}
                    />
                  ))}
                </div>
                <div className="max-sm:text-5xl text-white text-7xl font-bold">
                  {pokemon.species.name.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center">
                <img
                  className="w-[60%]"
                  src={pokemon.sprites.other.home.front_default}
                  alt={pokemon.species.name}
                />
              </div>
              <div className="text-white text-2xl flex gap-10 max-sm:flex-col">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl mb-3">Height</span>
                  <span className="">{pokemon.height / 10}M</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl mb-3">Weigth</span>
                  <span className="">{pokemon.weight / 10}KG</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl mb-3">Abilities</span>
                  {pokemon.abilities.map((ability, index) => (
                    <span key={index}>{ability.ability.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full flex flex-col items-center justify-center p-10">
          <div className="w-[50%] flex justify-center max-sm:w-[90%]">
            <div className="w-full text-white flex flex-col justify-center items-center">
              {pokemon.stats.map((stat, index) => (
                <div
                  key={index}
                  className="skills w-full flex flex-col items-center"
                >
                  <div className="w-full flex justify-between">
                    <span>{stat.stat.name.toUpperCase()}</span>
                  </div>
                  <div className="menu w-full flex justify-between font-bold text-xl mb-7">
                    <div
                      id={`${stat.stat.name}-menu`}
                      style={{ width: `${stat.base_stat / 1.5}%` }}
                    ></div>
                    <div className="">
                      <span>{stat.base_stat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
