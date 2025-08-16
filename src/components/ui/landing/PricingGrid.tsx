"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isDark?: boolean;
  icon?: React.ReactNode;
};

export default function PricingGrid({ plans, inView = true, variants }: {
  plans: PricingPlan[];
  inView?: boolean;
  variants?: { container?: Variants; item?: Variants };
}) {
  const container = variants?.container ?? { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = variants?.item ?? { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <section className="bg-[#FAFAF5] text-black py-16 px-4 lg:px-12 flex flex-col items-center justify-center min-h-screen">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="max-w-7xl mx-auto w-full text-center mb-16">
        {/* Heading is expected to be provided by parent with SectionHeading */}
      </motion.div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div key={index} initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} transition={{ delay: index * 0.15 }} className={`rounded-lg shadow-lg p-8 flex flex-col ${plan.isDark ? 'bg-black text-white' : 'bg-white text-black border border-gray-200'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">{plan.name}</h3>
              {plan.icon && <div className={`${plan.isDark ? 'text-white' : 'text-black'}`}>{plan.icon}</div>}
            </div>
            <hr className={`mb-4 ${plan.isDark ? 'border-gray-700' : 'border-gray-300'}`} />
            <p className="text-4xl font-bold mb-2">
              {plan.price}<span className="text-xl font-medium">{plan.period}</span>
            </p>
            <p className={`mb-6 text-sm ${plan.isDark ? 'text-gray-300' : 'text-gray-700'}`}>{plan.description}</p>
            <button className={`flex items-center justify-center px-6 py-3 rounded-full text-base font-medium transition-colors ${plan.isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              Start Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <svg className={`w-4 h-4 mr-2 ${plan.isDark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
