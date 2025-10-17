export default function TopBar() {
  return (
    <div className="flex h-[52px] w-full items-center justify-between bg-brandBlue px-6 text-white">
      <div className="leading-tight">
        <div className="flex items-center gap-2 text-[15px] font-medium">
          <span>AI Generated Version</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-95">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="text-xs/5 opacity-80">Changes saved</div>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Settings" className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M19.4 15a1.2 1.2 0 0 0 .24 1.32l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.2 1.2 0 0 0 15 19.4a1.2 1.2 0 0 0-1.2 1.2v.09a2 2 0 0 1-4 0v-.09A1.2 1.2 0 0 0 8.6 19.4a1.2 1.2 0 0 0-1.32.24l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.2 1.2 0 0 0 4.6 15 1.2 1.2 0 0 0 3.4 13.8h-.09a2 2 0 0 1 0-4h.09A1.2 1.2 0 0 0 4.6 8.6 1.2 1.2 0 0 0 4.36 7.28l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.2 1.2 0 0 0 8.6 4.6 1.2 1.2 0 0 0 9.8 3.4v-.09a2 2 0 0 1 4 0v.09A1.2 1.2 0 0 0 15.4 4.6a1.2 1.2 0 0 0 1.32-.24l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.2 1.2 0 0 0 19.4 8.6 1.2 1.2 0 0 0 20.6 9.8h.09a2 2 0 0 1 0 4h-.09A1.2 1.2 0 0 0 19.4 15Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="btn btn-outline h-9 rounded-[4px] px-4 text-sm">Preview</button>
        <button className="btn btn-solid h-9 rounded-[4px] px-4 text-sm">Save</button>
      </div>
    </div>
  )
}
