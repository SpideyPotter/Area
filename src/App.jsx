import Benefits from "./components/Benefits";
import FirstSection from "./components/FirstSection";
import Howto from "./components/Howto";
import Specs from "./components/Specs";
import Contactus from "./components/Contactus.jsx";
import Navbar from "./components/Topbar";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <FirstSection />
        <Benefits />
        <Specs />
        <Howto />
        <Contactus />
      </main>
    </div>
  );
}

export default App;
