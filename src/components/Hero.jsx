import heroImg from "../assets/hero.gif";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

const Hero = () => {
  const anchorRef = useRef(null);

  const handleClick = () => {
    anchorRef.current.click();
  };
  return (
    <div className="bg-base-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Ebadur</h1>
          <p className="mt-4 text-3xl capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg capitalize tracking-wide">
            turning ideas into interactive reality
          </p>

          <div
            onClick={handleClick}
            className="mb-8 py-5 mt-8  border-2 border-[#ced1cf] w-40 bg-base-300 hover:border-2 hover:shadow-sm hover:bg-[#8b918d] hover:text-black text-center tracking-tight rounded-2xl shadow-lg font-bold"
          >
            <a
              ref={anchorRef}
              href="https://drive.google.com/file/d/1h6sCu7ymwmlKqZl-LarHkkfRaHYSHVlg/view?usp=sharing"
              download
            >
              Download Resume
            </a>
          </div>

          <div className=" flex gap-x-5 mt-4">
            <a href="https://github.com/Ebadur-Rahman-Shohag">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ebadur-rahman-371a75252/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
