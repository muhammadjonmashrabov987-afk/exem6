import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Service from "./page/Service";
import Company from "./page/Company";
import TeamTemplate from "./page/TeamTemplate";
import Career from "./page/Career";
import CareerInner from "./page/CareerInner";
import Footer from "./components/footer";
import Blog from "./page/Blog";
function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/team/:id" element={<TeamTemplate />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:id" element={<CareerInner />} />
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
      <Footer />
    </>
  );
} 

export default App;