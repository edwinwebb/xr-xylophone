import { OrbitControls } from '@react-three/drei';
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
        <Xylophone />
        <Mallet position={[1,0,0]} />
        <Mallet position={[-1,0,0]} />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
