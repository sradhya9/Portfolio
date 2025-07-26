import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/projects" element={<MainLayout />} />
        <Route path="/skills" element={<MainLayout />} />
        <Route path="/contact" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
export default App;
