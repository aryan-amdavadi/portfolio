import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import Lights from "./Lights";
import Models from "./Models";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true }}
    >
      <Camera />
      <Lights />
      <Models />
      <Environment preset="city" />
    </Canvas>
  );
}
