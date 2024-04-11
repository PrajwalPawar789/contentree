import Navbar from "./components/Navbar";
import BusinessSolutions from "./components/BusinessSolutions";
import Industries from "./components/Industries";
import Set from "./components/Set";
import Footer from "./components/Footer";
import Foot from "./components/Foot";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <BusinessSolutions />
        <Industries />
        <Set />
        <Foot />
        <Footer />
      </div>
    </div>
  );
}

export default App;
