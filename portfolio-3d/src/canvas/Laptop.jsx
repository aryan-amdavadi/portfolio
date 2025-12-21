import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Laptop = () => {
  const ref = useRef();
  const { scene } = useGLTF("/models/laptop.glb");

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = Math.PI / 6 + Math.sin(clock.elapsedTime) * 0.04;

    ref.current.position.y = -1.4 + Math.sin(clock.elapsedTime) * 0.06;
  });

  return (
    <primitive
      object={scene}
      scale={2.2}        // 🔥 BIG FIX
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

export default Laptop;