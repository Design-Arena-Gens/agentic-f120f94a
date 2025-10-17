function NavItem({ label, active = false, icon }: { label: string; active?: boolean; icon: React.ReactNode }) {
  return (
    <div className={
      'flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm' +
      (active ? ' bg-sidebarActive text-white' : ' text-gray-300 hover:bg-white/5')
    }>
      <span className="opacity-90">{icon}</span>
      <span className={active ? 'text-white' : 'text-gray-300'}>{label}</span>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex h-[calc(100vh-52px)] w-[240px] flex-col justify-between bg-sidebarBg p-4 text-gray-200">
      <div>
        <div className="mb-4 px-2 text-xs font-semibold tracking-widest text-white/90">WORLDQUVN LEARNING</div>
        <div className="space-y-1">
          <NavItem label="Overview" icon={<IconSpeed />} />
          <NavItem label="Learning Objectives" icon={<IconBook />} />
          <NavItem label="Ontology" icon={<IconGraph />} />
          <NavItem label="Source Library" icon={<IconChart />} />
        </div>

        <div className="mt-6 px-2 text-[11px] font-semibold tracking-wider text-gray-400">LEARNING PATHS</div>
        <div className="mt-2 space-y-1">
          <NavItem label="WQU Administration" active icon={<IconGraph colorClass="text-white" />} />
          <NavItem label="Intro to Python" icon={<IconBranch />} />
          <NavItem label="Python foundations" icon={<IconBranch />} />
        </div>
        <button className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-left text-sm text-gray-300 hover:bg-white/10">
          <span className="mr-2">+</span> New path
        </button>

        <div className="mt-6">
          <NavItem label="Settings" icon={<IconCog />} />
        </div>
      </div>
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#343A40] text-white">A</div>
        <div className="text-xs text-gray-400">ayhan@tap...</div>
      </div>
    </aside>
  )
}

function IconSpeed() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-300">
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M14 10l-3 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}
function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-300">
      <path d="M4 5h7a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3V5Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M20 5h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3V5Z" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  )
}
function IconGraph({ colorClass = 'text-gray-300' }: { colorClass?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={colorClass}>
      <path d="M4 20V4m0 0l7 7 5-5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-300">
      <path d="M4 20h16M8 17V9m4 8V5m4 12v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}
function IconBranch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-300">
      <path d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7 8v10a5 5 0 0 0 5-5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}
function IconCog() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-300">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M19.4 15a1.2 1.2 0 0 0 .24 1.32l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.2 1.2 0 0 0 15 19.4a1.2 1.2 0 0 0-1.2 1.2v.09a2 2 0 0 1-4 0v-.09A1.2 1.2 0 0 0 8.6 19.4a1.2 1.2 0 0 0-1.32.24l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.2 1.2 0 0 0 4.6 15 1.2 1.2 0 0 0 3.4 13.8h-.09a2 2 0 0 1 0-4h.09A1.2 1.2 0 0 0 4.6 8.6 1.2 1.2 0 0 0 4.36 7.28l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.2 1.2 0 0 0 8.6 4.6 1.2 1.2 0 0 0 9.8 3.4v-.09a2 2 0 0 1 4 0v.09A1.2 1.2 0 0 0 15.4 4.6a1.2 1.2 0 0 0 1.32-.24l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.2 1.2 0 0 0 19.4 8.6 1.2 1.2 0 0 0 20.6 9.8h.09a2 2 0 0 1 0 4h-.09A1.2 1.2 0 0 0 19.4 15Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
