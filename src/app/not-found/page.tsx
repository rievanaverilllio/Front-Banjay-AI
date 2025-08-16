"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#edf2f9] flex items-center justify-center p-6 font-sans text-gray-800 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-300/50 to-sky-300/50 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/40 to-pink-300/40 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
      />

      <motion.div
        className="w-full max-w-2xl bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-8 text-center relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Floating 404 */}
        <div className="mb-4 flex items-center justify-center gap-2 select-none">
          {["4", "0", "4"].map((d, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 drop-shadow-sm"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.1 * i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
              {d}
            </motion.span>
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Halaman Tidak Ditemukan</h1>
        <p className="mt-2 text-sm text-gray-600">URL yang Anda akses tidak tersedia atau telah dipindahkan.</p>

        <div className="mt-6">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link href="/" className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 shadow-sm">
              Kembali ke Beranda
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
