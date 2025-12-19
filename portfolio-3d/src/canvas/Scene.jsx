import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import Lights from "./Lights";
import Models from "./Models";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 45 }}
    >
      <Camera />
      <Lights />
      <Models />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <pointLight position={[0, 2, 2]} intensity={1.5} />

      <Environment preset="city" />
    </Canvas>
  );
}
