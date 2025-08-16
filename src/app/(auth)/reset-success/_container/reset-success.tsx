"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/ui/auth/AuthShell";
import AuthHeader from "@/components/ui/auth/AuthHeader";

export default function ResetSuccess() {
  const router = useRouter();
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    if (counter <= 0) {
      router.push("/login");
      return;
    }
    const t = setTimeout(() => setCounter((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [counter, router]);

  const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <AuthShell>
      <motion.div initial="hidden" animate="visible" variants={fade} className="w-full max-w-md">
        <AuthHeader eyebrow="PASSWORD RESET" title="Password updated" />
        <div className="mb-6 text-sm text-gray-600 leading-relaxed">
          Password kamu berhasil diperbarui. Kamu bisa langsung kembali login dan melanjutkan aktivitas.
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 13.2 9.2 17.5 19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="flex-1 text-sm text-green-800">
              <p className="font-semibold mb-0.5">Berhasil disimpan</p>
              <p className="text-green-700 text-xs">Mengalihkan otomatis ke halaman login dalam {counter} detik...</p>
            </div>
          </div>
        </div>
        <div>
          <a href="/login" className="w-full block py-2 rounded-full bg-black hover:bg-gray-800 text-white text-sm font-semibold text-center transition">Pergi ke Login sekarang</a>
        </div>
        <div className="mt-10 text-[11px] text-gray-400 tracking-wide">
          Jika ini bukan kamu, segera hubungi support.
        </div>
      </motion.div>
    </AuthShell>
  );
}
