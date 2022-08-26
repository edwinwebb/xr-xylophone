/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import useSound from 'use-sound'
import { RigidBody } from '@react-three/rapier'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/xylophone.gltf')
  const [playC] = useSound('/C.mp3')
  const [playD] = useSound('/D.mp3')
  const [playE] = useSound('/E.mp3')
  const [playF] = useSound('/F.mp3')
  const [playG] = useSound('/G.mp3')
  const [playA] = useSound('/A.mp3')
  const [playB] = useSound('/B.mp3')
  const [playC2] = useSound('/C2.mp3')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.frame.geometry} material={materials.Material} position={[-0.71, 0.22, -0.01]} rotation={[-Math.PI, -1.44, -Math.PI / 2]} scale={[0.11, 1.23, 0.07]} />
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playC()}
        >
        <mesh onClick={playC} geometry={nodes.C.geometry} material={materials['Material.002']} position={[-0.08, 0.35, 0.97]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.76]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playD()}
        >
        <mesh onClick={playD} geometry={nodes.D.geometry} material={materials['Material.003']} position={[-0.08, 0.34, 0.68]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.69]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playE()}
        >
        <mesh onClick={playE} geometry={nodes.E.geometry} material={materials['Material.004']} position={[-0.08, 0.35, 0.39]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.64]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playF()}
      >
        <mesh  onClick={playF} geometry={nodes.F.geometry} material={materials['Material.005']} position={[-0.08, 0.35, 0.09]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.61]} />
      </RigidBody>
      <RigidBody

        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playG()}
        >
      <mesh onClick={playG} geometry={nodes.G.geometry} material={materials['Material.006']} position={[-0.08, 0.35, -0.2]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.57]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playA()}
        >
      <mesh onClick={playA} geometry={nodes.A.geometry} material={materials['Material.007']} position={[-0.08, 0.35, -0.49]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.53]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playB()}
        >
      <mesh onClick={playB} geometry={nodes.B.geometry} material={materials['Material.008']} position={[-0.08, 0.35, -0.79]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.49]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        onCollisionEnter={() => playC2()}
      >
      <mesh onClick={playC2} geometry={nodes.C2.geometry} material={materials['Material.001']} position={[-0.08, 0.35, -1.08]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.05, 0.13, 0.45]} />
      </RigidBody>
      <mesh geometry={nodes.Sphere.geometry} material={materials.buttons} position={[-0.76, 0.41, 0.98]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials.buttons} position={[-0.68, 0.4, 0.69]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials.buttons} position={[-0.65, 0.4, 0.39]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials.buttons} position={[-0.6, 0.4, 0.09]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials.buttons} position={[-0.56, 0.4, -0.19]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials.buttons} position={[-0.54, 0.4, -0.48]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials.buttons} position={[-0.49, 0.4, -0.78]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials.buttons} position={[-0.44, 0.4, -1.08]} rotation={[-Math.PI / 2, -1.57, 0]} scale={[0.04, 0.05, 0.05]} />
    </group>
  )
}

useGLTF.preload('/xylophone.gltf')
