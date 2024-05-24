"use client";
import Image from "next/image";
import logotype from "../../public/logotype.png";
import AnimatedLabel from "./presentation/components/AnimatedLabel";
import style from "../app/styles/pokeball.module.css";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center p-10">
      <div className="flex items-center justify-between  w-[80%] px-4">
        <div className="">
          <Image src={logotype} alt="logo" className="w-[320px]" />
        </div>
        <div className="p-6 border-2px border-black flex gap-3">
          <AnimatedLabel />
          <div className="">
            <button className={style.pokeball}></button>
          </div>
        </div>
      </div>
    </header>
  );
}