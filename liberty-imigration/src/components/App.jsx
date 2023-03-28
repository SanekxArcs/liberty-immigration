import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import UaLang from "./UaLang/UaLang";
import ByLang from "./ByLang/ByLang";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UaLang />}></Route>
        <Route path="/ua" element={<UaLang />}></Route>
        <Route path="/by" element={<ByLang />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
