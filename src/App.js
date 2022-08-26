import { Box, Cylinder, OrbitControls, Plane } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import { Debug, Physics, CuboidCollider, RigidBody } from '@react-three/rapier';
import Xylophone from "./Xylophone";
import Mallet from './Mallet'
import { useController, XR, Controllers, VRButton } from '@react-three/xr';
import { useEffect } from 'react';


function App() {
  return (<>
    <VRButton />
    <Canvas>
      <XR>
        <ambientLight intensity={1} />
        <Physics>
          <Debug />
          <Xylophone position={[0,.5,0]} />
          {/* <LeftMallet position={[-.32,.71,.05]} /> */}
          <Mallet position={[.32,.5,.05]} />
          <CuboidCollider args={[1,1]} position={[0,0,0]} scale={[10,0.1,10]} />
          <RigidBody type="fixed" colliders="cuboid">
            <Box
              position={[0, -0.05, 0]}
              scale={[10, 0.1, 10]}
              rotation={[0, 0, 0]}
              receiveShadow
            >
              <meshStandardMaterial color="white" />
            </Box>
          </RigidBody>
          <RigidBody type="fixed" colliders="cuboid">
            <Box
            position={[0, 0.25, 0]}
            scale={[1, .5, 1]}
            rotation={[0, 0, 0]}>
              <meshStandardMaterial color="grey" />
            </Box>
          </RigidBody>
        </Physics>
        <Controllers />
      </XR>
      <OrbitControls />
    </Canvas>
    </>
  );
}

export default App;
