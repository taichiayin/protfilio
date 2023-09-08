import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div >
      <Header />
      <div className="mt-[60px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
