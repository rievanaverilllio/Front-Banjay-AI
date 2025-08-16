"use client";
import { motion, Variants } from "framer-motion";

export default function Achievements({
  eyebrow = "• PROJECT HIGHLIGHTS",
  heading = "As a data-driven team, we let the numbers \nspeak for us",
  items,
  inView = true,
  variants,
}: {
  eyebrow?: string;
  heading?: string;
  items: { value: string; title: string; description: string }[];
  inView?: boolean;
  variants?: { container?: Variants; item?: Variants };
}) {
  const container = variants?.container ?? {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = variants?.item ?? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#FAFAF5] text-black py-6 px-2 lg:px-12 min-h-screen flex items-center">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="max-w-7xl mx-auto w-full">
        <motion.p variants={item} className="text-sm uppercase tracking-widest text-gray-500 mb-4">{eyebrow}</motion.p>
        <motion.h2 variants={item} className="text-2xl sm:text-3xl lg:text-4xl font-light leading-snug max-w-4xl mb-16 whitespace-pre-line">
          {heading}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((it, idx) => (
            <motion.div key={idx} variants={item}>
              <p className="text-5xl font-semibold">{it.value}</p>
              <hr className="my-4 border-gray-300" />
              <p className="font-semibold mb-1">{it.title}</p>
              <p className="text-gray-600">{it.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
