"use client";

import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import { motion } from 'framer-motion';
import { useLenisSmoothScroll } from '@/lib/useLenisSmoothScroll';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import type React from 'react';
import Hero from '@/components/ui/landing/Hero';
import Achievements from '@/components/ui/landing/Achievements';
import SectionHeading from '@/components/ui/landing/SectionHeading';
import ProcessCarousel, { type ProcessStep } from '@/components/ui/landing/ProcessCarousel';
import PricingGrid, { type PricingPlan } from '@/components/ui/landing/PricingGrid';
import AnimatedArrowsCTA from '@/components/ui/landing/AnimatedArrowsCTA';

export default function LandingPage() {
  useLenisSmoothScroll();

  // Animation variants shared

  // Data for new service items (adapted to the flood project)
  // NOTE: serviceItems UI not present currently as a section; keep data for future extraction if needed.

  // Data for process steps, now with image properties (adapted to the AI project)
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Data Collection & Briefing",
      description: "Understanding project needs, collecting Himawari satellite imagery, historical data, journals, and environmental data.",
      image: "data_colection.jpeg"
    },
    {
      id: 2,
      title: "System Design & Architecture",
      description: "Designing AI and LLM architecture, and planning data integration from various sources.",
      image: "design_system.jpeg"
    },
    {
      id: 3,
      title: "Model Development & Training",
      description: "Building AI and LLM models, training them with relevant data, and performing initial validation.",
      image: "model_development.jpeg"
    },
    {
      id: 4,
      title: "Integration & Testing",
      description: "Integrating the models into the monitoring system and conducting thorough testing for accuracy and performance.",
      image: "testing.jpeg"
    },
    {
      id: 5,
      title: "Implementation & Launch",
      description: "Deploying the early flood warning system and launching it for operational use.",
      image: "implementation.jpeg"
    },
    {
      id: 6,
      title: "Continuous Monitoring & Optimization",
      description: "Continuously monitoring system performance, gathering feedback, and performing optimizations for improvement.",
      image: "optimization.jpeg"
    },
  ];

  // Removed local drag constraints logic; handled inside ProcessCarousel component.


  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic Package",
      price: "$5,000",
      period: "/project",
      description: "For initial feasibility studies and prototype development of the AI flood monitoring model.",
      features: [
        "Needs Analysis",
        "Initial Data Collection",
        "Basic Architecture Design",
        "AI Model Prototype",
        "Initial Report",
      ],
      isDark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Development Package",
      price: "$15,000",
      period: "/project",
      description: "For core AI and LLM model development with comprehensive data integration.",
      features: [
        "All from Basic Package",
        "Advanced AI Model Development",
        "Himawari Satellite Image Integration",
        "Historical & Environmental Data Processing",
        "Model Training & Validation",
        "Technical Support",
      ],
      isDark: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Full Package",
      price: "$25,000",
      period: "/project",
      description: "A complete solution for early flood monitoring with system implementation and ongoing support.",
      features: [
        "All from Development Package",
        "Early Warning System Implementation",
        "Integration with Existing Infrastructure",
        "User Training",
        "Continuous Monitoring & Optimization",
        "Priority Support (24/7)",
      ],
      isDark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z" fill="currentColor"/>
        </svg>
      )
    },
  ];

  // Refs for sections to enable smooth scrolling to them
  const homeRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null); // Added contactRef for footer link

  // Function to handle smooth scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // InView hooks for various sections
  const [mainRef, mainInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [achievementRef, achievementInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [teamSectionRef, teamSectionInView] = useInView({ triggerOnce: true, threshold: 0.3 }); // New for team section text
  const [servicesSectionRef, servicesSectionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [processSectionRef, processSectionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [processCardsContainerRef, processCardsContainerInView] = useInView({ triggerOnce: true, threshold: 0.1 }); // For the draggable process cards container
  const [pricingSectionRef, pricingSectionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 }); // New for footer

  // Animation variants for common fade-in-up effect
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  };


  return (
    <div className="bg-[#0A0A0A] text-white font-sans flex flex-col overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectsRef={projectsRef}
        teamRef={aboutRef}
        servicesRef={servicesRef}
        processRef={processRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />

      {/* Hero */}
      <section ref={homeRef}>
        <div ref={mainRef as unknown as React.RefObject<HTMLDivElement>}>
          <Hero
            inView={mainInView}
            variants={{ container: staggerContainer, item: fadeInFromBottom }}
            backgroundUrl={'/flood1.jpg'}
            title={<><span>AI for Early Flood Monitoring: </span><br />Banjay</>}
            description={"This project aims to develop AI with LLM for early flood monitoring based on Himawari BMKG satellite imagery, various verified journals, historical flood data, and surrounding environmental data collected during sampling."}
          />
        </div>
      </section>

      {/* Achievement Section */}
      <section ref={projectsRef}>
        <div ref={achievementRef as unknown as React.RefObject<HTMLDivElement>}>
          <Achievements
            inView={achievementInView}
            variants={{ container: staggerContainer, item: fadeInFromBottom }}
            items={[
              { value: '95%+', title: 'Prediction Accuracy', description: 'Our AI model achieves high accuracy in predicting potential floods.' },
              { value: '5+', title: 'Integrated Data Sources', description: 'Combining satellite imagery, historical data, journals, and environmental sensors.' },
              { value: '10x', title: 'Improved Early Response', description: 'Enabling faster early warnings for disaster mitigation.' },
            ]}
          />
        </div>
      </section>

      {/* Arrow Motion Section */}
  <AnimatedArrowsCTA />

      {/* Process Section - Title and Description */}
      <section ref={processRef} className="bg-[#FAFAF5] text-black py-16 px-4 lg:px-12 flex flex-col items-center justify-center text-center">
        <div ref={processSectionRef as unknown as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto w-full">
          <SectionHeading
            inView={processSectionInView}
            variants={{ container: staggerContainer, item: fadeInFromBottom }}
            eyebrow="• HOW WE WORK"
            title="Process"
            subtitle="To ensure seamless and effortless flood monitoring, we have established a simple and efficient process that will help us get started on the Judul Banjay project as quickly as possible."
          />
        </div>
      </section>

      {/* Process Content Cards Section - Draggable */}
      <section ref={processCardsContainerRef as unknown as React.RefObject<HTMLElement>}>
        <ProcessCarousel steps={processSteps} inView={processCardsContainerInView} variants={{ item: fadeInFromBottom }} />
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef}>
        <div ref={pricingSectionRef as unknown as React.RefObject<HTMLDivElement>} className="bg-[#FAFAF5] text-black py-16 px-4 lg:px-12 flex flex-col items-center justify-center">
          <SectionHeading
            inView={pricingSectionInView}
            variants={{ container: staggerContainer, item: fadeInFromBottom }}
            eyebrow="• Pricing"
            title="Project Packages"
            align="center"
          />
        </div>
        <PricingGrid plans={pricingPlans} inView={pricingSectionInView} variants={{ container: staggerContainer, item: fadeInFromBottom }} />
      </section>

  {/* Footer Section */}
      <Footer
        contactRef={contactRef}
        footerRef={footerRef}
        footerInView={footerInView}
        staggerContainer={staggerContainer}
        fadeInFromBottom={fadeInFromBottom}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        pricingRef={pricingRef}
      />
    </div>
  );
}
