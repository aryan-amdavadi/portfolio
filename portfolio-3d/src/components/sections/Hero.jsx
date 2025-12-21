import Scene from "../../canvas/Scene";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* 3D Canvas Layer */}
      <div className="hero-left">
        <h1>
          Hi, I’m <span>Aryan</span>
        </h1>
        <p>
          Full-Stack Developer <br />
          React • 3D Web • UI Engineering
        </p>
      </div>
      <div className="hero-right">
        <Scene />
      </div>

      {/* Text Layer */}
      
    </section>
  );
};

export default Hero;
