import { useGLTF } from "@react-three/drei";

const Laptop = () => {
  const { scene } = useGLTF("/models/laptop.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={3.8}
      position={[0, -1.4, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

export default Laptop;
