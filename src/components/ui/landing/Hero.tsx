"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero({
  title,
  description,
  ctaText = "TRY OUR DEMO",
  backgroundUrl,
  inView,
  variants,
}: {
  title: string | React.ReactNode;
  description: string;
  ctaText?: string;
  backgroundUrl?: string;
  inView?: boolean;
  variants?: { container?: Variants; item?: Variants };
}) {
  const router = useRouter();
  const container = variants?.container ?? {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = variants?.item ?? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main
      className="flex-grow flex flex-col justify-end pt-24 pb-8 px-8 lg:px-20 min-h-screen"
      style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : undefined}
    >
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="text-left mb-4 lg:mb-0">
            <motion.h1 variants={item} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              {title}
            </motion.h1>
          </div>
          <div className="space-y-8 lg:text-right">
            <motion.p variants={item} className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg lg:ml-auto">
              {description}
            </motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row lg:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
              <button onClick={() => router.push('/login')} className="px-6 py-3 bg-black border border-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-colors">
                {ctaText}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
