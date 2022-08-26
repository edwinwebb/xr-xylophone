import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Model }  from "./xylophone";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
