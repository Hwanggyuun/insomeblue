import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Main from "./pages/main/main";
import Bottom from "./pages/main/main-bottom/Bottom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import Client from "./pages/client/Client";
import "./PageTransition.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/About" element={<About />} />
      <Route path="/main/Contact" element={<Contact />} />
      <Route path="/main/Service" element={<Service />} />
      <Route path="/main/Portfolio" element={<Portfolio />} />
      <Route path="/main/Client" element={<Client />} />
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AnimatedRoutes />
      <Bottom />
    </Router>
  );
};

export default AppRouter;
