import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from '../constants'
import CTA from "../components/cta/cta.component";
import '../assets/animation/transition.styles.css';
// import useFadeIn from "../hooks/useFadeIn";
import { motion } from "framer-motion";

const About = () => {

  // const { opacity } = useFadeIn(800);

  return (
    <motion.div 
      className='max-container'
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: { duration: 1 }}} 
      exit={{opacity: 0, transition: { duration: 1 }}}
    >
      <h1 className='head-text'>
        Hello! I'm <span className='gold-gradient_text font-semibold drop-shadow'>Egor</span>
      </h1>
      <div className='mt-5 flex flex-col gep-3 text-slate-500'>
        <p>
        With years of hands-on experience, I'm your go-to guy for both frontend finesse and system wizardry. From crafting seamless user experiences to fine-tuning system infrastructure, I've got the chops to handle it all. Let's roll up our sleeves and tackle the tech challenges ahead together!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.alt}
                className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work experience</h3>
        <div className='mt-5 flex flex-col gep-3 text-slate-500'>
        <p>
        I've had the pleasure of working with a diverse range of companies, where I've honed my skills and forged valuable connections with talented individuals. Here's a snapshot of my journey so far:
        </p>

        <div className='mt-12 flex '>
          <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement 
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                    </div>}
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{margin: 0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li 
                        key={`experience-point-${index}`} 
                        className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </div>
        </div>
      </div>


      <hr className="border-slate-200"/>
      <CTA />

    </motion.div>
  )
}

export default About