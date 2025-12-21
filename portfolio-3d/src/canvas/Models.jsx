import { Sphere } from "@react-three/drei";

export default function Models() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#b11226"
        emissive="#ff1e3c"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}
