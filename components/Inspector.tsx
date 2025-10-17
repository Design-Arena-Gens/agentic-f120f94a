function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm text-black">{value}</div>
    </div>
  )
}

export default function Inspector() {
  return (
    <aside className="w-[320px] bg-offPanel p-4">
      <div className="space-y-6">
        <div className="card overflow-hidden">
          <div className="card-header">
            <div className="text-[16px] font-semibold text-gray-800">Learning Path</div>
            <button aria-label="Copy" className="rounded p-1 hover:bg-gray-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <path d="M9 9h10v10H9V9Z" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M5 5h10v10" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            </button>
          </div>
          <div className="card-body grid grid-cols-1 gap-4">
            <KV label="Course" value="Coding Fundamentals" />
            <KV label="Module" value="Coding Fundamentals" />
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="card-header">
            <div className="text-[16px] font-semibold text-gray-800">Learning Objectives</div>
            <div className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">1</div>
          </div>
          <div className="card-body">
            <div className="space-y-2">
              <div className="text-sm text-gray-800">Understand the motivations for...</div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-brandBlue">
                  <path d="M12 2l10 10-10 10L2 12 12 2Z" fill="currentColor"/>
                </svg>
                <span>Bloom 1 (Knowledge)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="card-header">
            <div className="text-[16px] font-semibold text-gray-800">Learning Experiences</div>
            <button className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">New +</button>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-4 py-10 text-center">
              <div className="flex flex-col items-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M4 5h8a4 4 0 0 1 4 4v10H8a4 4 0 0 0-4 4V5Z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M20 5h-8a4 4 0 0 0-4 4v10h8a4 4 0 0 1 4 4V5Z" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
                <div className="mt-2 text-sm text-gray-500">No learning experiences</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
