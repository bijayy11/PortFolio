import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import PortfolioLinks from './pages/PortfolioLinks';
import Testimonials from './pages/Testimonials';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/portfolio-links" element={<PortfolioLinks />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Layout>
  );
};

export default App;