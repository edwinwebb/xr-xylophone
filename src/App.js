import { Box, Cylinder, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier';
import Xylophone from "./Xylophone";
import Mallet from './Mallet'
import { XR, Controllers, VRButton } from '@react-three/xr';
import { Suspense } from 'react';
import Music from './Music';

function App() {
  return (<>
    <VRButton />
    <Canvas camera={{position:[0,1,1]}} shadows>
      <XR>
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          shadow-mapSize-width={1024}
        />
        <Environment preset="apartment" />
        <Suspense fallback={null}>
          <Music position={[0,1,-1]} />
        </Suspense>
        <Physics> 
          <group position={[0,0,-0.5]}>
            <Xylophone position={[0,.7,0]} />
            <Mallet hand="right" position={[-.32,.7,.05]} />
            <Mallet hand="left" position={[.32,.7,.05]} />
            <RigidBody type="fixed" colliders="cuboid">
              <Cylinder
                args={[.45,.6,.7, 64]}
                position={[0, 0.7/2, 0]}
                castShadow
                receiveShadow
                >
                <meshStandardMaterial color="grey" />
              </Cylinder>
            </RigidBody>
          </group>
          <RigidBody type="fixed" colliders="cuboid">
            <Box
              position={[0, -0.05, 0]}
              scale={[100, 0.1, 100]}
              rotation={[0, 0, 0]}
              receiveShadow
            >
              <meshStandardMaterial color="white" />
            </Box>
          </RigidBody>
        </Physics>
        <Controllers hideRaysOnBlur={true} />
      </XR>
      <OrbitControls />
    </Canvas>
    </>
  );
}

export default App;
