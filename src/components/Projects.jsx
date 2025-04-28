import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useState } from 'react';

const Projects = () => {
  const [viewAll, setViewAll] = useState(false)
  const handleClick = () => {
    setViewAll((prevState) => !prevState);
  }
  const projectsToRender = viewAll ? projects : projects.slice(0, 6);
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      {/* tabs */}
      <div>
        <ul className='flex justify-center gap-4'>
          <li className='border-b border-gray-300 py-2 px-4 hover:border-gray-500 hover:text-gray-500 cursor-pointer'>All</li>
          <li className='border-b border-gray-300 py-2 px-4 hover:border-gray-500 hover:text-gray-500 cursor-pointer'>Web</li>
          <li className='border-b border-gray-300 py-2 px-4 hover:border-gray-500 hover:text-gray-500 cursor-pointer'>Mobile</li>
          <li className='border-b border-gray-300 py-2 px-4 hover:border-gray-500 hover:text-gray-500 cursor-pointer'>UI/UX</li>
        </ul>
      </div>
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projectsToRender.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
      <div className='flex justify-center  '>
        <button onClick={handleClick} className='border-2 border-[#ced1cf] px-8 py-5  bg-base-300  hover:shadow-sm hover:bg-[#8b918d] hover:text-black text-center tracking-tight rounded-2xl shadow-lg font-bold'>{viewAll ? 'View Less Projects' : 'View All Projects'}</button>
      </div>
    </section>
  );
};
export default Projects;
