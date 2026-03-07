import { Canvas } from "@react-three/fiber";
import InteractiveSphere from "@/Components/PreLoader/components/InteractiveSphere";

const SphereCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <InteractiveSphere />
      </Canvas>
    </div>
  );
};

export default SphereCanvas;