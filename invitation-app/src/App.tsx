import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import PhotoGallery from "./components/PhotoGallery";
import GiftRegistry from "./components/GiftRegistry";
import RSVP from "./components/RSVP";
import "./App.css";

// Define los colores para fácil acceso
const colors = {
  roseGold: "#D4AFB9",
  gold: "#ECCA9C",
};

function App() {
  return (
    <div className="scroll-container">
      <section className="section">
        <Hero />
      </section>
      <section className="section" style={{ backgroundColor: colors.roseGold }}>
        <Countdown />
      </section>
      <section className="section" style={{ backgroundColor: colors.gold }}>
        <EventDetails />
      </section>
      <section className="section" style={{ backgroundColor: colors.roseGold }}>
        <DressCode />
      </section>
      <section className="section" style={{ backgroundColor: colors.gold }}>
        <PhotoGallery />
      </section>
      <section className="section" style={{ backgroundColor: colors.roseGold }}>
        <GiftRegistry />
      </section>
      <section className="section" style={{ backgroundColor: colors.gold }}>
        <RSVP />
      </section>
    </div>
  );
}

export default App;
