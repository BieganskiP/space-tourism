import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";

export default function App() {
  return (
    <BrowserRouter basename="space-tourism">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination/:planet" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}
