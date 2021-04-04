import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home.component";
import Nav from "./components/Nav.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
