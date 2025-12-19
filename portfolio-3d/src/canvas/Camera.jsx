import { useFrame, useThree } from "@react-three/fiber";
import useScroll from "../hooks/useScroll";

export default function Camera() {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    camera.position.z = 6 + scroll * 2;
    camera.position.y = scroll * -1;
  });

  return null;
}
