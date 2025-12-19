import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="hero-card glass"
      >
        <h1 className="hero-title">Aryan Amdavadi</h1>
        <p className="hero-sub">
          Full-Stack & 3D Web Developer
        </p>
        <button className="btn-primary">View Projects</button>
      </motion.div>
    </section>
  );
}
