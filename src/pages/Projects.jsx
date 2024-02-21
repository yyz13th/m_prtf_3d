import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow, play } from '../assets/icons'
import CTA from '../components/cta/cta.component'
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <motion.div
      className='w-full h-screen bg-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <section className='max-container text-black'>
        <h1 className='head-text'>
          My <span className='gold-gradient_text font-semibold drop-shadow'>Projects</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I`ve embarked on numerous projects throughout the years, but these are
            the ones I hold closest to my heart. Many of them are open-source, so if
            you come across something that piques your interest, feel free to
            explore the codebase and contribute your ideas for further enhancements.
            Your collaboration is highly valued!
          </p>
        </div>

        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project) => (
            <div className='lg:w-[300px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='Project icon'
                    className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex gap-2 items-center font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel="noreferrer noopener"
                    className='font-semibold text-yellow-600'>
                    GitHub Repo...
                  </Link>
                  <img
                    src={play}
                    alt="play"
                    className='w-4 h-4 object-contain fill-yellow-600' />
                  <Link
                    to={project.deploy}
                    target='_blank'
                    rel="noreferrer noopener"
                    className='font-semibold text-yellow-600 ml-5'>
                    View in deploy...
                  </Link>
                  <img
                    src={play}
                    alt="play"
                    className='w-4 h-4 object-contain fill-yellow-600' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className='border-slate-200' />
        <CTA />

      </section>
    </motion.div>
  )
}

export default Projects