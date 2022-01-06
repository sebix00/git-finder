import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Users from "./components/user/Users";
import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import Details from "./pages/Details";
import Navigation from "./components/hero/navigation/Navigation";
import About from "./pages/About";

function App() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Hero />

      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/user" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
