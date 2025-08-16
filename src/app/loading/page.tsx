"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative min-h-screen bg-[#edf2f9] flex items-center justify-center p-6 overflow-hidden">
      {/* Background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl"
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl shadow-lg px-6 py-5"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 text-gray-800">
          {/* Animated dots loader */}
          <div className="relative w-16 h-5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400"
                initial={{ x: 0, opacity: 0.6 }}
                animate={{ x: [0, 16, 32], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 0.9, delay: i * 0.12, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
          <span className="text-sm font-medium">Memuat konten…</span>
        </div>
      </motion.div>
    </div>
  );
}
