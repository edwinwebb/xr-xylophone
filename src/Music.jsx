import { Plane, useTexture } from "@react-three/drei";

const Music = (props) => {
  const joy = useTexture("/joytotheworld.jpg");
  const twinkle = useTexture("/twinkle.jpg");
  return (
    <group {...props}>
      <Plane scale={[1,.86,1]} visible={true} >
        <meshPhysicalMaterial map={joy}/>
      </Plane>
      <Plane scale={[1,.46,1]} visible={false} >
        <meshPhysicalMaterial map={twinkle}/>
      </Plane>
    </group>
  );
}

useTexture.preload("/joytotheworld.jpg");
useTexture.preload("/twinkle.jpg");

export default Music;