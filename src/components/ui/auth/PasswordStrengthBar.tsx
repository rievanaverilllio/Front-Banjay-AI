export default function PasswordStrengthBar({ strength, labels = ["Sangat lemah", "Lemah", "Cukup", "Baik", "Kuat"] }: { strength: 0 | 1 | 2 | 3 | 4; labels?: string[] }) {
  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-emerald-500"];
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex-1 flex gap-1">
        {[0, 1, 2, 3].map(i => (
          <span key={i} className={`h-1 w-full rounded ${strength > i ? colors[strength] : 'bg-gray-200'}`}></span>
        ))}
      </div>
      <span className="text-[10px] uppercase tracking-wide text-gray-500">{labels[strength]}</span>
    </div>
  );
}
