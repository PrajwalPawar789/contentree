import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/Navbar";
import BusinessSolutions from "./components/BusinessSolutions";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <BusinessSolutions />
      </div>
    </div>
  );
}

export default App;
