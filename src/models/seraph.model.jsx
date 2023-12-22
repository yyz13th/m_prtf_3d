import { useEffect, useRef } from 'react'

// import planeScene from '../assets/3d/plane.glb'
// import gracesScene from '../assets/3d/graces-draco2.glb'
import seraphScene from '../assets/3d/seraph_compressed.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Seraph = () => {
    const ref = useRef();
    const { scene, animations } = useGLTF(seraphScene)
    const { actions } = useAnimations(animations, ref)

  return (
    <mesh ref={ref}>
    {/* <primitive object={scene} />  */}
    <primitive 
        object={scene} 
        scale={[6.2, 6.2, 6.2]} 
        position={[0, -7.2, 0]}
        rotation={[0, 0, 0]}/>
    </mesh>
  )
}
export default Seraph