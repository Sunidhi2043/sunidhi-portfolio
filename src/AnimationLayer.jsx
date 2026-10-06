import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function AnimationLayer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Mouse-following glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute left-1/2 top-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl"
      />

      {/* Floating orb 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl"
      />

      {/* Floating orb 2 */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -70, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-3xl"
      />

      {/* Floating orb 3 */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl"
      />

      {/* Subtle animated grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}