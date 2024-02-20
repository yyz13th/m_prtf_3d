import { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';

import Fox from '../models/fox.model';
import Loader from '../components/loader/loader.component';
import useAlert from '../hooks/useAlert.hook';
import Alert from '../components/alert/alert.component';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }; //alllows to update inputs

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    //emailjs site service + template + KEY stored as env local vars
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Egor',
        from_email: form.email,
        to_email: 'yz13th@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=> {
      setIsLoading(false);
      showAlert({ 
        show: true, 
        text:'Message sent!', 
        type: 'success' });

      setTimeout(() => {
        setCurrentAnimation('idle');
        hideAlert();
        setForm({name: '', email: '', message: ''});
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({ 
        show: true, 
        text:'Didnt recieve your message. Please try again', 
        type: 'danger' });
    })
  };


  return (
    <motion.div 
      className='relative flex lg:flex-row flex-col max-container h-[100vh]'
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: { duration: 1 }}} 
      exit={{opacity: 0, transition: { duration: 1 }}}
    >
      {alert.show && <Alert {...alert}/>}


      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>

        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            placeholder='Name'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
            type='email'
            name='email'
            className='input'
            placeholder='Name@example.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Message
            <textarea
            name='message'
            rows={4}
            className='textarea'
            placeholder='Let me know how I can help you'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>

          <button 
            type='submit' 
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* create scene for object below form*/}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Fox 
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </motion.div> 
  )
}

export default Contact