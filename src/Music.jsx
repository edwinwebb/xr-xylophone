import { Plane, useTexture } from "@react-three/drei";

const Music = (props) => {
  const texture = useTexture("/twinkle.jpg");
  return (
    <group {...props}>
      <Plane scale={[1,.46,1]} >
        <meshPhysicalMaterial map={texture}/>
      </Plane>
    </group>
  );
}

useTexture.preload("/twinkle.png");

export default Music;