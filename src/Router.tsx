import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Main from "./pages/main/main";
import Bottom from "./pages/main/main-bottom/Bottom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import Client from "./pages/client/Client";
import "./PageTransition.css"; // 애니메이션 CSS 파일 추가

const AnimatedRoutes = () => {
  const location = useLocation(); // 현재 경로 감지

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname} // 경로가 바뀔 때마다 애니메이션 실행
        classNames="fade"
        timeout={300} // 애니메이션 지속 시간
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/about" element={<About />} />
          <Route path="/main/Contact" element={<Contact />} />
          <Route path="/main/service" element={<Service />} />
          <Route path="/main/portfolio" element={<Portfolio />} />
          <Route path="/main/client" element={<Client />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AnimatedRoutes />
      <Bottom /> {/* 항상 하단에 고정 */}
    </Router>
  );
};

export default AppRouter;
