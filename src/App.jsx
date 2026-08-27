import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main">
        {/*
          `key={pathname}` memaksa wrapper ini remount setiap pindah halaman,
          sehingga animasi masuk selalu terputar ulang (termasuk saat berpindah
          antar project detail yang memakai route yang sama).
        */}
        <div key={pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}
