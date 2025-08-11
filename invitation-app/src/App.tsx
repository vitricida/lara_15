import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import PhotoGallery from "./components/PhotoGallery";
import GiftRegistry from "./components/GiftRegistry";
import RSVP from "./components/RSVP";
import "./App.css";

const backgrounds = {
  countdown: `url(https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  eventDetails: `url(https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  dressCode: `url(https://images.pexels.com/photos/258410/pexels-photo-258410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  photoGallery: `url(https://images.pexels.com/photos/1619495/pexels-photo-1619495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  giftRegistry: `url(https://images.pexels.com/photos/13904005/pexels-photo-13904005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  rsvp: `url(https://images.pexels.com/photos/2413089/pexels-photo-2413089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
};

function App() {
  return (
    <div className="scroll-container">
      <section className="section">
        <Hero />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.countdown }}
      >
        <Countdown />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.eventDetails }}
      >
        <EventDetails />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.dressCode }}
      >
        <DressCode />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.photoGallery }}
      >
        <PhotoGallery />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.giftRegistry }}
      >
        <GiftRegistry />
      </section>
      <section
        className="section"
        style={{ backgroundImage: backgrounds.rsvp }}
      >
        <RSVP />
      </section>
    </div>
  );
}

export default App;
