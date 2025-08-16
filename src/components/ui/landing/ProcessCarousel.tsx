"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type ProcessStep = { id: number; title: string; description: string; image: string };

export default function ProcessCarousel({ steps, inView = true, variants }: {
  steps: ProcessStep[];
  inView?: boolean;
  variants?: { item?: Variants };
}) {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const [dragConstraintsWidth, setDragConstraintsWidth] = useState<number>(0);

  useEffect(() => {
    const calculateConstraints = () => {
      if (constraintsRef.current) {
        setDragConstraintsWidth(constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth);
      }
    };
    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, [steps.length]);

  const item = variants?.item ?? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#FAFAF5] text-black py-16">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="relative w-full overflow-hidden cursor-grab px-4 lg:px-12">
        <motion.div ref={constraintsRef} className="flex gap-8 py-4" drag="x" {...(typeof dragConstraintsWidth === 'number' && { dragConstraints: { left: -dragConstraintsWidth, right: 0 } })} whileTap={{ cursor: "grabbing" }}>
          {steps.map((step, index) => (
            <motion.div key={step.id} initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} transition={{ delay: index * 0.15 }} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
              <div className="p-8 text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 text-lg font-bold mb-4">{step.id}</div>
                <h3 className="text-2xl font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-base text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
