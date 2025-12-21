import Scene from "../../canvas/Scene";
import "../../styles/hero.css";
import "../../styles/globals.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Hi, I’m <span>Aryan</span>
        </h1>
        <p className="role">Full-Stack Developer</p>
        <p className="stack">React · 3D Web · UI Engineering</p>
      </div>

      <div className="hero-right">
        <Scene />
      </div>
    </section>
  );
};

export default Hero;
