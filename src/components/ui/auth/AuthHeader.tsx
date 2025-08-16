export default function AuthHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: React.ReactNode }) {
  return (
    <div>
      {eyebrow && <p className="text-xs text-gray-600 mb-1 tracking-wide">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2 flex items-center">
        {title}
        <span className="text-gray-700 ml-1 text-4xl">.</span>
      </h2>
      {subtitle && <div className="text-sm text-gray-600 mb-6">{subtitle}</div>}
    </div>
  );
}
