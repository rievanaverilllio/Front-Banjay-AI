"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AuthShell from "@/components/ui/auth/AuthShell";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthInput from "@/components/ui/auth/AuthInput";
import OtpInput from "@/components/ui/auth/OtpInput";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading">("idle");
	const [codeRequested, setCodeRequested] = useState(false);
	const CODE_LENGTH = 6;
	const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
	const [error, setError] = useState("");
	const [codeError, setCodeError] = useState("");
	const [confirmLoading, setConfirmLoading] = useState(false);
	const router = useRouter();

	const [mainContentRef, mainContentInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const fadeInFromBottom = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" as const },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 1 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const handleSend = () => {
		setError("");
		setCodeError("");
		if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
			setError("Masukkan email yang valid.");
			return;
		}
		setStatus("loading");
		setTimeout(() => {
			setStatus("idle");
			setCodeRequested(true);
		}, 1000);
	};

	const handleConfirm = () => {
		if (confirmLoading) return;
		if (code.some((d) => d === "")) {
			setCodeError("Lengkapi semua digit kode.");
			return;
		}
		setCodeError("");
		setConfirmLoading(true);
		// Simulasi verifikasi kode
		setTimeout(() => {
			const fakeToken = btoa(`${email}-${Date.now()}`).replace(/=+$/, "");
			router.push(`/reset-password?token=${fakeToken}`);
		}, 1100);
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
					<AuthHeader eyebrow="RESET YOUR PASSWORD" title="Forgot password" subtitle={<span>Masukkan email kamu untuk menerima kode verifikasi. <a href="/login" className="text-black hover:underline">Kembali login?</a></span>} />
				</motion.div>
				<div className="space-y-6">
					<motion.div variants={fadeInFromBottom}>
						<div className="flex gap-2">
							<div className="flex-1">
								<AuthInput
									label="Email"
									type="email"
									placeholder="email@domain.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									disabled={status === 'loading'}
									rightIcon={
										<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.217l-7.51 5.006a1 1 0 0 1-1.08 0L4 9.217V17.5a.5.5 0 0 0 .5.5h15Z"
											/>
										</svg>
									}
								/>
							</div>
							<button onClick={handleSend} disabled={status === 'loading'} className="px-5 py-2 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-sm transition flex items-center gap-2 disabled:opacity-60">
								{status === 'loading' && (<span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />)}
								Send
							</button>
						</div>
						{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
					</motion.div>
					{codeRequested && (
						<motion.div variants={fadeInFromBottom} className="space-y-4">
							<p className="text-xs text-gray-600">Masukkan kode verifikasi 6 digit yang kami kirim ke <span className="font-medium">{email}</span>.</p>
							<OtpInput length={CODE_LENGTH} value={code} onChange={(next) => { setCode(next); setCodeError(""); }} />
							{codeError && <p className="text-red-500 text-xs">{codeError}</p>}
							<div className="flex items-center gap-4 text-xs text-gray-500">
								<button type="button" onClick={() => { setCode(Array(CODE_LENGTH).fill("")); }} className="underline hover:text-gray-700">Reset kode</button>
								<button type="button" onClick={handleSend} className="underline hover:text-gray-700">Kirim ulang</button>
							</div>
							<div>
								<button onClick={handleConfirm} disabled={confirmLoading || code.some((d) => !d)} className="w-full py-2 rounded-full bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-semibold text-sm transition flex items-center justify-center gap-2">
									{confirmLoading && (<span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />)}
									Konfirmasi kode
								</button>
							</div>
						</motion.div>
					)}
				</div>
			</motion.div>
		</AuthShell>
	);
}

