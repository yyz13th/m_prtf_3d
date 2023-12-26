import { useProgress } from '@react-three/drei'
import PacmanLoader from "react-spinners/PacmanLoader";
import CanvasTwo from '../components/canvases/CanvasTwo.component'
import CanvasOne from '../components/canvases/CanvasOne.component'
import CanvasThree from '../components/canvases/CanvasThree.component';
const Home = () => {
  
  const { progress } = useProgress();
  return (
 <section className='w-full h-screen relative' style={{ backgroundColor: 'black' }}>
      <div className='ex_fade-in-op'>{progress  < 100 ? (
        <div className="absolute flex flex-col items-center justify-center text-4xl gap-7 font-josefin font-regular text-yellow-600 h-screen top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          <PacmanLoader color="#c2b72e" loading={true} size={20} /> 
          <br />
          <p className='shadow-yellow'>{` ${progress }%`}</p>
        </div>
      ) : (
        <>
            {/* <CanvasOne />
            <CanvasTwo /> */}
            <CanvasThree /> 
            </>
      )} </div>
    </section>
  )
}

export default Home