import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RouteGuard from "./components/RouteGuard";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RouteGuard><Dashboard /></RouteGuard>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
