import { links } from "../data";

function Footer() {
  return (
    <footer className="bg-[#303837]">
      <div className="align-element py-4 flex justify-center  sm:flex-row sm:gap-x-8 sm:items-center sm:py-8">
        <div className="text-white mx-auto flex flex-col space-y-2 text-center gap-x-4 md:flex-row md:space-y-0">
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
      </div>
    </footer>
  );
}

export default Footer;
