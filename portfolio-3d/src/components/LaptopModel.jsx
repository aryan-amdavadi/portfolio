import { Float } from "@react-three/drei";

export default function LaptopModel() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
      <group position={[0, -0.4, 0]} rotation={[0, -0.4, 0]}>
        {/* Screen */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[2.2, 1.3, 0.05]} />
          <meshStandardMaterial
            color="#0b0000"
            emissive="#b11212"
            emissiveIntensity={0.45}
          />
        </mesh>

        {/* Base */}
        <mesh position={[0, -0.1, 0.6]}>
          <boxGeometry args={[2.4, 0.12, 1.6]} />
          <meshStandardMaterial
            color="#090000"
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}
