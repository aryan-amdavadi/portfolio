import { Sphere } from "@react-three/drei";

export default function Models() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial color="#4f8cff" />
    </Sphere>
  );
}
