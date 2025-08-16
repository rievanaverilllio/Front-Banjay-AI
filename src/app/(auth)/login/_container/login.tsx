"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AuthShell from "@/components/ui/auth/AuthShell";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import GoogleButton from "@/components/ui/auth/GoogleButton";
import OrDivider from "@/components/ui/auth/OrDivider";
import AuthInput from "@/components/ui/auth/AuthInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const [mainContentRef, mainContentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === "user@user.com" && password === "user") {
      router.push("/user/dashboard");
    } else if (email === "admin@admin.com" && password === "admin") {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = () => {
    if (googleLoading) return;
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      router.push("/user/dashboard");
    }, 1400);
  };

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
          <AuthHeader eyebrow="START FOR FREE" title="Log in to your account" subtitle={<span>Not a member? <a href="/signup" className="text-black hover:underline">Create account</a></span>} />
        </motion.div>
        <div>
          <motion.div variants={fadeInFromBottom}>
            <GoogleButton loading={googleLoading} onClick={handleGoogleLogin} text="Sign in with Google" />
          </motion.div>
          <motion.div variants={fadeInFromBottom}>
            <OrDivider />
          </motion.div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <motion.div variants={fadeInFromBottom}>
              <AuthInput label="Email" type="email" placeholder="johndoe@email.com" value={email} onChange={(e) => setEmail(e.target.value)} rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.217l-7.51 5.006a1 1 0 0 1-1.08 0L4 9.217V17.5a.5.5 0 0 0 .5.5h15Z"/></svg>} />
            </motion.div>
            <motion.div variants={fadeInFromBottom}>
              <AuthInput label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H8V9Zm10 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5Z"/> </svg>} />
              <div className="mt-2 text-right">
                <a href="/forgot-password" className="text-xs font-medium text-gray-600 hover:text-black transition underline-offset-2 hover:underline">Forgot password?</a>
              </div>
            </motion.div>
            {error && <motion.p variants={fadeInFromBottom} className="text-red-500 text-sm mt-2">{error}</motion.p>}
            <motion.button variants={fadeInFromBottom} type="submit" className="w-full py-2 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-base transition mt-2">Log In</motion.button>
          </form>
        </div>
      </motion.div>
    </AuthShell>
  );
}
