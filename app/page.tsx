import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import ContentHeader from '../components/ContentHeader'
import Inspector from '../components/Inspector'
import CanvasEmpty from '../components/CanvasEmpty'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col">
          <ContentHeader />
          <div className="flex min-h-0 flex-1">
            <Inspector />
            <CanvasEmpty />
          </div>
        </main>
      </div>
    </div>
  )
}
