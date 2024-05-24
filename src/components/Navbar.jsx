import { useEffect, useState } from "react";
import { links } from "../data";
import { BsMoonFill, BsSunFill, BsList } from "react-icons/bs";

const themes = {
  lemonade: "lemonade",
  black: "black",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.lemonade;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleTheme() {
    const { lemonade, black } = themes;
    const newTheme = theme === black ? lemonade : black;

    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-base-200 w-full">
      <div className="align-element py-4 flex justify-between items-center sm:py-8">
        {/* Logo */}
        <h2 className="hidden sm:flex text-3xl font-bold">
          Sho<span>hag</span>
        </h2>
        <div className="flex items-center gap-4">
          {/* Mobile dropdown menu */}
          <div className="relative sm:hidden">
            <button onClick={toggleDropdown}>
              <BsList className="text-2xl" />
            </button>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-base-200 w-52 shadow-lg rounded-b-lg mt-2">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="block py-2 px-4 text-lg tracking-wide hover:text-emerald-600 duration-300"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Navigation links for medium and large screens */}
          <div className="hidden sm:flex gap-x-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* Dark mode icon */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-6 w-6" />
            <BsMoonFill className="swap-off h-6 w-6" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
