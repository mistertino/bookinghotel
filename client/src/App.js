import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import List from "./page/List/List";
import Hotel from "./page/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
