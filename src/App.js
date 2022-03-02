import "./App.css";
import Astrology from "./components/Astrology";
import Consult from "./components/Consult";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Protect from "./components/Protect";
import Reasons from "./components/Reasons";
import Satisfaction from "./components/Satisfaction";
import Working from "./components/Working";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Consult />
      <Astrology />
      <Reasons />
      <Satisfaction />
      <Working />
      <Protect />
      <News />
    </div>
  );
}

export default App;
