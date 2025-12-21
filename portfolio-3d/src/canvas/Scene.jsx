import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Camera from "./Camera";
import Laptop from "./Laptop";

const Scene = () => {
  return (
    <Canvas className="canvas">
      <Camera />

      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={3} />

      <Suspense fallback={null}>
        <Laptop />
      </Suspense>

      {/* MUST be ON for debugging */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene;
