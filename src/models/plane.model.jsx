import { useEffect, useRef } from 'react'

// import planeScene from '../assets/3d/plane.glb'
import planeScene from '../assets/3d/floating_fox.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        console.log(animations)
        // if(isRotating) {
        //     actions['Take 001'].play();
        // } else {
        //     actions['Take 001'].stop();
        // }
        if(isRotating) {
            actions['Animation'].play();
        } else {
            actions['Animation'].stop();
        }
    }, [isRotating, actions])
  return (
    <mesh {...props} ref={ref}>
        {/* <primitive object={scene} />  */}
        <primitive object={scene} scale={[0.3, 0.3, 0.3]} />
    </mesh>
  )
}

export default Plane