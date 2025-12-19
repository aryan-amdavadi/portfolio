export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <spotLight
        position={[2, 4, 6]}
        angle={0.35}
        penumbra={1}
        intensity={1.5}
        color="#ff1e3c"
      />

      <pointLight
        position={[-3, -2, -3]}
        intensity={0.6}
        color="#b11226"
      />
    </>
  );
}
