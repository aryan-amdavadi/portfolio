import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Camera = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(4, 1.5, 6);
    camera.lookAt(0, 0, 0);
  }, []);

  return null;
};

export default Camera;
