import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <MainComponent>
        <p>1/15</p>
        <p>Questions?</p>
      </MainComponent>
    </div>
  );
}

export default App;
