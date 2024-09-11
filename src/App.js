import "./App.css";
import Weather from "./Weather.js";
import WeatherReactLinks from "./WeatherReactLinks.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
      </header>
      <main>
        <Weather />
      </main>
      <footer>
        <WeatherReactLinks />
      </footer>
    </div>
  );
}

export default App;