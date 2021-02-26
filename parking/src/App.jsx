import logo from "./logo.svg";
import "./Style/App.scss";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div class="container">
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <NavBar />
    </div>
  );
}

export default App;
