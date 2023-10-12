import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Header from "./components/Header/Header";
import BMI from "./Pages/BMI";
import WorkoutLog from "./Pages/WorkoutLog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
      </Routes>
    </div>
  );
}

export default App;
