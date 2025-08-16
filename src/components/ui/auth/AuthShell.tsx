"use client";
import Link from "next/link";

export default function AuthShell({
  children,
  rightImageSrc = "/flood4.jpg",
  showRightPanel = true,
  leftClassName = "w-full md:w-[55%] bg-white flex flex-col justify-center px-8 md:px-24 py-16 min-h-screen text-black",
}: {
  children: React.ReactNode;
  rightImageSrc?: string;
  showRightPanel?: boolean;
  leftClassName?: string;
}) {
  return (
    <div className="min-h-screen w-full flex relative bg-[#FAFAF5]">
      <Link href="/dashboard" className="absolute top-6 left-6 z-20 flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-full bg-white hover:bg-gray-100 hover:text-black transition font-medium text-sm shadow">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Home
      </Link>
      <div className={leftClassName}>
        {children}
      </div>
      {showRightPanel && (
        <div className="hidden md:block w-[45%] relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent z-10" />
          <img src={rightImageSrc} alt="bg" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
