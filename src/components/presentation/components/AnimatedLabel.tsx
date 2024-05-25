import { Letter, handleChangeType } from "@/app/lib/definitions";
import { usePokemonContext } from "@/context/context";
import { useState } from "react";
const AnimatedLabel = () => {
  const { searchValue, setNewSearchValue } = usePokemonContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewSearchValue(value);
  }
  return (
    <div className="relative w-[190px]">
      <input
        required
        type="text"
        name="name"
        value={searchValue}
        onChange={handleChange}
        className="focus:border-blue-900 valid:border-blue-900 max-w-[190px] border-b border-white border-solid bg-transparent outline-none px-4 py-2 transition duration-200 text-white text-2xl"
        id="pokeinput"
      />

      <label
        className="absolute left-0 transition-all duration-500 text-2xl"
        id="labelLetters"
      >
        <span style={{ transitionDelay: "0ms", left: "0px" }}>P</span>
        <span style={{ transitionDelay: "75ms", left: "15px" }}>o</span>
        <span style={{ transitionDelay: "150ms", left: "30px" }}>k</span>
        <span style={{ transitionDelay: "225ms", left: "43px" }}>e</span>
        <span style={{ transitionDelay: "300ms", left: "57px" }}>N</span>
        <span style={{ transitionDelay: "375ms", left: "76px" }}>a</span>
        <span style={{ transitionDelay: "450ms", left: "90px" }}>m</span>
        <span style={{ transitionDelay: "525ms", left: "116px" }}>e</span>
        <p className="absolute -left-2  text-2xl m-2 text-white pointer-events-none transition duration-500">
          PokeName
        </p>
      </label>
    </div>
  );
};
export default AnimatedLabel;
