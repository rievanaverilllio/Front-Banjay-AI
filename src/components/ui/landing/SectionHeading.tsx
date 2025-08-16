"use client";
import { motion, Variants } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variants,
  inView = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variants?: { container?: Variants; item?: Variants };
  inView?: boolean;
}) {
  const container = variants?.container ?? {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = variants?.item ?? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`w-full ${alignClass}`}
    >
      {eyebrow && (
        <motion.p variants={item} className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={item} className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
