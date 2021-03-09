import logo from "./logo.svg";
import "./Style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Grids from "./Components/Grids";
import Offset from "./Components/Offset";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Grids /> */}
      <SectionOne />
      <SectionTwo />
      <Offset />
    </div>
  );
}

export default App;
