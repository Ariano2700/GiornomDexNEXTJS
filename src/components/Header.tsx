"use client";
import Image from "next/image";
import logotype from "../../public/logotype.png";
import AnimatedLabel from "./presentation/components/AnimatedLabel";
import style from "../app/styles/pokeball.module.css";
import { handleSubmitType } from "@/app/lib/definitions";
import { usePokemonContext } from "@/context/context";

export default function Header() {
  const { searchValue, setNewSearchValue } = usePokemonContext();
  const handleSubmit: handleSubmitType = (e) => {
    e.preventDefault();
    if (searchValue) {
      try {
        setNewSearchValue(searchValue);
      } catch (error: any) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
  };
  return (
    <header className="w-full flex items-center justify-center p-10">
      <div className="flex items-center justify-between w-[80%] px-4 max-lg:flex-col">
        <div className="">
          <Image src={logotype} alt="logo" className="w-[320px]" />
        </div>
        <div className="p-6 border-2px border-black flex gap-3">
          <form className="flex gap-3" onSubmit={handleSubmit}>
            <AnimatedLabel />
            <div className="">
              <button className={style.pokeball}></button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
