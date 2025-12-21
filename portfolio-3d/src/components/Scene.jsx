import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Laptop from "./Laptop";

const Scene = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "55vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas className="canvas" camera={{ fov: 35 }}>
  <Camera />

  <ambientLight intensity={1.5} />
  <directionalLight position={[5, 5, 5]} intensity={2.5} />

  <Suspense fallback={null}>
    <Laptop />
  </Suspense>

  {/* REMOVE OrbitControls IN PRODUCTION */}
</Canvas>

    </div>
  );
};

export default Scene;
