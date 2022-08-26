import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Debug, Physics } from '@react-three/rapier';
import Model  from "./Xylophone";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Physics>
        <Debug />
        <Model />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
