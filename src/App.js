import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AndChill from "./pages/AndChill";
import CinePare from "./pages/CinePare";
import WeatherDash from "./pages/WeatherDash";
import CodeQuiz from "./pages/CodeQuiz";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="page">
        
        
          <Navbar />
        
        <div className="pageContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/andchill" component={AndChill} />
          <Route exact path="/cinepare" component={CinePare} />
          <Route exact path="/weatherdash" component={WeatherDash} />
          <Route exact path="/codequiz" component={CodeQuiz} />
        </div>


        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
