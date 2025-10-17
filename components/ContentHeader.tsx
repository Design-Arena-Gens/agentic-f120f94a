export default function ContentHeader() {
  return (
    <div className="flex h-[62px] items-center border-b border-borderLight bg-white px-6">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <h1 className="ml-4 text-[24px] font-bold leading-none text-black">Why Do We Code</h1>
    </div>
  )
}
