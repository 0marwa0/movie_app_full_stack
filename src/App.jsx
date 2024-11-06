import { useEffect, useState } from "react";
import SingleMovie from "./singleMovie";
import "./App.css";
import Movies from "./Movies";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
