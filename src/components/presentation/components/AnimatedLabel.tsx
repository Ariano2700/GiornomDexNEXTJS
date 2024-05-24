import { Letter } from "@/app/lib/definitions";

// const letters: Letter[] = [
//   { char: "P", delay: 0, left: 0 },
//   { char: "o", delay: 75, left: 15 },
//   { char: "k", delay: 150, left: 30 },
//   { char: "e", delay: 225, left: 43 },
//   { char: "N", delay: 300, left: 57 },
//   { char: "a", delay: 375, left: 76 },
//   { char: "m", delay: 450, left: 90 },
//   { char: "e", delay: 525, left: 111 },
// ];

const AnimatedLabel = () => {
  return (
    <div className="relative w-[190px]">
      <input
        required
        type="text"
        className="focus:border-blue-900 valid:border-blue-900 max-w-[190px] border-b border-white border-solid bg-transparent outline-none px-4 py-2 transition duration-200 text-white text-2xl"
        id="pokeinput"
      />

      <label
        className="absolute left-0 transition-all duration-500 text-2xl"
        id="labelLetters"
      >
        {/* {letters.map((letter, index) => (
          <span
            key={index}
            className="absolute transition-all duration-500 text-2xl"
            style={{
              transitionDelay: `${letter.delay}ms`,
              left: `${letter.left}px`,
            }}
          >
            {" "}
            {letter.char}{" "}
          </span>
        ))} */}
        <span style={{ transitionDelay: "0ms", left: "0px" }}>P</span>
        <span style={{ transitionDelay: "75ms", left: "15px" }}>o</span>
        <span style={{ transitionDelay: "150ms", left: "31px" }}>k</span>
        <span style={{ transitionDelay: "225ms", left: "43px" }}>e</span>
        <span style={{ transitionDelay: "300ms", left: "59px" }}>N</span>
        <span style={{ transitionDelay: "375ms", left: "76px" }}>a</span>
        <span style={{ transitionDelay: "450ms", left: "92px" }}>m</span>
        <span style={{ transitionDelay: "525ms", left: "116px" }}>e</span>
        <p className="absolute -left-2  text-2xl m-2 text-white pointer-events-none transition duration-500">
          PokeName
        </p>
      </label>
    </div>
  );
};
export default AnimatedLabel;
