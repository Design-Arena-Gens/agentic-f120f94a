export default function CanvasEmpty() {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-white">
      <div className="flex max-w-[560px] flex-col items-center text-center">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-gray-300">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M7 9h10M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <div className="mt-4 text-[22px] font-bold text-black">No Learning Experiences yet</div>
        <div className="mt-2 text-sm text-gray-600">Start to create your learning experiences and build up them with AI easily</div>
        <button className="btn btn-primary mt-6 rounded-md px-4 py-2 text-[15px]">Create first experience +</button>
      </div>
    </div>
  )
}
