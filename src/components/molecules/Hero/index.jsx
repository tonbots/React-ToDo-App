import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const skill = (
    <Typewriter
      words={["Front End Developer", "UI Design", "UX Design"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={200}
      deleteSpeed={200}
      delaySpeed={1700}
    />
  );

  const tag1 = `<`;
  const tag2 = `  />`;
  return (
    <div>
      <p className="text-xl text-indigo-500 font-bold">
        {tag1}
        {skill}
        {tag2}
      </p>
    </div>
  );
};

export default Hero;
