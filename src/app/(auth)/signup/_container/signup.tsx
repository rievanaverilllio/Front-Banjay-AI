"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AuthShell from "@/components/ui/auth/AuthShell";
import AuthHeader from "@/components/ui/auth/AuthHeader";
import AuthInput from "@/components/ui/auth/AuthInput";

export default function Signup() {
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
					<AuthHeader eyebrow="START FOR FREE" title="Create new account" subtitle={<span>Already a member? <a href="/login" className="text-black hover:underline">Log In</a></span>} />
				</motion.div>
				<form className="space-y-4">
					<motion.div variants={staggerContainer} className="flex gap-2">
						<motion.div variants={fadeInFromBottom} className="flex-1">
							<AuthInput label="First Name" placeholder="John" rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/></svg>} />
						</motion.div>
						<motion.div variants={fadeInFromBottom} className="flex-1">
							<AuthInput label="Last Name" placeholder="Doe" rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/></svg>} />
						</motion.div>
					</motion.div>
					<motion.div variants={fadeInFromBottom}>
						<AuthInput label="Email" type="email" placeholder="johndoe@email.com" rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.217l-7.51 5.006a1 1 0 0 1-1.08 0L4 9.217V17.5a.5.5 0 0 0 .5.5h15Z"/></svg>} />
					</motion.div>
					<motion.div variants={fadeInFromBottom}>
						<AuthInput label="Password" type="password" placeholder="Password" rightIcon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H8V9Zm10 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5Z"/></svg>} />
					</motion.div>
					<motion.div variants={fadeInFromBottom} className="flex gap-2 mt-4">
						<button type="submit" className="flex-1 py-2 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-base transition">Create account</button>
					</motion.div>
				</form>
			</motion.div>
		</AuthShell>
	);
}

