import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import "./index.css";

const initialState = {
  questions: [],
  //'loading', 'error', 'ready','active','finished'
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

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
