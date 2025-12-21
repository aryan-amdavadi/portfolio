import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Laptop from "./Laptop";

const Scene = () => {
  return (
    <Canvas
      className="canvas"
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 1.4, 5], fov: 32 }}
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />

      <Suspense fallback={null}>
        <Laptop scale={2.2} position={[-0.5, -0.8, 0]} />


      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
