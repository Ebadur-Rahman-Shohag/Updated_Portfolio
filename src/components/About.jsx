import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-base-200 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-500 mt-8 leading-loose">
            Passionate frontend developer proficient in JavaScript and React,
            dedicated to creating engaging and seamless user experiences. With a
            keen eye for design and a commitment to clean, efficient code, I
            strive to bring creativity and functionality to web development
            projects. Eager to collaborate and continuously learn in the dynamic
            world of frontend technologies.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
