"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AuthShell from "@/components/ui/auth/AuthShell";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthInput from "@/components/ui/auth/AuthInput";
import PasswordStrengthBar from "@/components/ui/auth/PasswordStrengthBar";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [strength, setStrength] = useState<0 | 1 | 2 | 3 | 4>(0);

  const [mainContentRef, mainContentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  useEffect(() => {
    // Simple strength estimation
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    if (s > 4) s = 4;
    setStrength(s as 0 | 1 | 2 | 3 | 4);
  }, [password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!password || password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }
    if (password !== confirm) {
      setError("Konfirmasi password tidak sama.");
      return;
    }
    setStatus("loading");
    // Simulate API call then redirect to success
    setTimeout(() => {
      router.push("/reset-success");
    }, 1400);
  };

  const strengthLabels = ["Sangat lemah", "Lemah", "Cukup", "Baik", "Kuat"]; // 0..4
  const strengthColors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-emerald-500"];

  return (
    <AuthShell>
      <motion.div
        ref={mainContentRef}
        initial="hidden"
        animate={mainContentInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="w-full max-w-md"
      >
        <motion.div variants={fadeInFromBottom}>
          <AuthHeader eyebrow="SET NEW PASSWORD" title="Reset password" subtitle={<span>Buat password baru untuk akun kamu. <a href="/login" className="text-black hover:underline">Kembali login?</a></span>} />
        </motion.div>
        {token && (
          <motion.div variants={fadeInFromBottom} className="text-[11px] tracking-wide text-gray-500 mb-4 select-all">Token: {token.slice(0, 32)}{token.length > 32 && '...'}</motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div variants={fadeInFromBottom}>
            <AuthInput label="Password baru" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} disabled={status === 'loading'} rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H8V9Zm10 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5Z"/></svg>} />
            <div className="mt-2">
              <PasswordStrengthBar strength={strength} />
            </div>
          </motion.div>
          <motion.div variants={fadeInFromBottom}>
            <AuthInput label="Konfirmasi password" type="password" placeholder="Ulangi password" value={confirm} onChange={(e) => setConfirm(e.target.value)} disabled={status === 'loading'} rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H8V9Zm10 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5Z"/></svg>} />
          </motion.div>
          {error && <motion.p variants={fadeInFromBottom} className="text-red-500 text-sm">{error}</motion.p>}
          <motion.button
            variants={fadeInFromBottom}
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 rounded-full bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-semibold text-base transition flex items-center justify-center gap-2"
          >
            {status === "loading" && (<span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />)}
            Simpan password baru
          </motion.button>
        </form>
      </motion.div>
    </AuthShell>
  );
}

export default function ResetPasswordContainer() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-gray-500">Memuat...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
