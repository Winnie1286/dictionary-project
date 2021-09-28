import typewriter from "./typewriter.svg";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={typewriter} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          Coded by Winnie, open-sourced on{" "}
          <a
            href="https://github.com/Winnie1286/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
