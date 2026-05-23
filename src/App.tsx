import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import Module1 from './pages/Module1'
import Module2 from './pages/Module2'
import Module3 from './pages/Module3'
import Module4 from './pages/Module4'
import Module5 from './pages/Module5'
import Module6 from './pages/Module6'
import Appendix from './pages/Appendix'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="module1" element={<Module1 />} />
        <Route path="module2" element={<Module2 />} />
        <Route path="module3" element={<Module3 />} />
        <Route path="module4" element={<Module4 />} />
        <Route path="module5" element={<Module5 />} />
        <Route path="module6" element={<Module6 />} />
        <Route path="appendix" element={<Appendix />} />
      </Route>
    </Routes>
  )
}

export default App