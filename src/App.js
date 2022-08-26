import { Cylinder, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Debug, Physics } from '@react-three/rapier';
import Xylophone from "./Xylophone";
import Mallet from './Mallet'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Physics>
        <Debug />
        <Xylophone position={[0,.7,0]} />
        <Mallet position={[-.32,.71,.05]} />
        <Mallet position={[.32,.71,.05]} />
      </Physics>
      <Cylinder args={[.45,.6,.7,64]} position={[0,.35,0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
