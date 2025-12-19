<Canvas camera={{ position: [0, 1.2, 7], fov: 40 }}>
  <fog attach="fog" args={["#050000", 6, 14]} />

  <ambientLight intensity={0.6} />
  <directionalLight position={[5, 6, 5]} intensity={1.4} />
  <pointLight position={[-4, 2, 3]} intensity={1} color="#ff4d4d" />

  {/* LEFT aligned laptop */}
  <group position={[-2.2, -0.3, 0]}>
    <LaptopModel />
  </group>

  <OrbitControls
    enableZoom={false}
    enablePan={false}
    autoRotate
    autoRotateSpeed={0.45}
  />
</Canvas>
