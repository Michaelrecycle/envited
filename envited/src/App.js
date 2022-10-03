import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Event from "./pages/Event";
import Form from "./pages/Form/Form";
import Landing from "./pages/Landing.js";
import './theme/theme.scss';
const App = () => {
  return (
    <div className='App light' >
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="/" element={<Event />} />
      </Routes>
    </div>
  );
}
export default App;