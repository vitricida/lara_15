import Hero from "./components/Hero";
import QuinceMessage from "./components/QuinceMessage";
import PhotoCarousel from "./components/PhotoCarousel";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";

import "./App.css";

function App() {
  return (
    <div className="scroll-container">
      <section className="section">
        <Hero />
      </section>
      <section className="section">
        <QuinceMessage />
      </section>
      <section className="section">
        <PhotoCarousel />
      </section>
      <section className="section">
        <EventDetails />
      </section>
      <section className="section">
        <Countdown />
      </section>
      <section className="section">
        <DressCode />
      </section>
    </div>
  );
}

export default App;
