import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

import Works from "./components/works/Works";

import "./sass/style.scss";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}
