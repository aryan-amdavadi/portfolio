import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Models() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x =
      Math.sin(clock.getElapsedTime()) * 0.1;
  });

  return (
    <Sphere ref={mesh} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#b11226"
        emissive="#ff1e3c"
        emissiveIntensity={0.5}
        roughness={0.25}
        metalness={0.6}
      />
    </Sphere>
  );
}
