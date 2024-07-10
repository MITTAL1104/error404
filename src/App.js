import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Feed from "./pages/Feed";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/feed">Feed</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="/" exact />
          <Route path="/feed" element={<Feed />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
