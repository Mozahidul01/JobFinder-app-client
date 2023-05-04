export default function JobSkeleton() {
  return (
    <div className="flex flex-row border-b border-slate-700 py-4 mb-2">
      <div className="animate-pulse flex-1 min-w-0">
        <div className="h-4 bg-slate-700 rounded" />
        <div className=" flex flex-col md:flex-row gap-4 text-sm mt-4">
          <div className="h-3 w-24 bg-slate-700 rounded" />
          <div className="h-3 w-32 bg-slate-700 rounded" />
          <div className="h-3 w-40 bg-slate-700 rounded" />
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-6 w-20 bg-slate-700 rounded-md" />
          <div className="h-6 w-20 bg-slate-700 rounded-md" />
        </div>
      </div>
    </div>
  );
}
