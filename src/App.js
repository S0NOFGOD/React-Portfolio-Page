import { Routes, Route } from "react-router-dom"
import PortfolioHome from "./Portfolio/PortfolioHome"
import ProfilepageHome from "./Profilepage/ProfilepageHome"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/Projects" element={<ProfilepageHome />} />
    </Routes>
  )
}

export default App