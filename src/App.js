import logo from "./assets/logo-banner/flight logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginTop: "60px" }}>
          website is being deployed, it may take some time to fetch files.
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          We will get back soon!!
        </a>
      </header>
    </div>
  );
}

export default App;
