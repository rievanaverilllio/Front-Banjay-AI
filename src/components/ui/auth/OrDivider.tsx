export default function OrDivider({ label = 'or' }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-[10px] tracking-wider text-gray-500 font-medium uppercase">{label}</span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}
