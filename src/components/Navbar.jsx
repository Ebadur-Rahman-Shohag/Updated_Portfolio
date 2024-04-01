import { useEffect, useState } from "react";
import { links } from "../data";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  lemonade: "lemonade",
  black: "black",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.lemonade;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  function handleTheme() {
    const { lemonade, black } = themes;
    const newTheme = theme === black ? lemonade : black;

    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    // md:text-lg sm:text-sm align-element py-4 flex md:justify-content:space-between; flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8
    <nav className="bg-base-200 w-full">
      <div className="align-element py-4 flex flex-col justify-center sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Sho<span>hag</span>
        </h2>
        <div className="flex justify-center gap-x-4 ">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
