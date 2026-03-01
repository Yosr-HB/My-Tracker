import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Me from "./components/Me";
import TaskTracker from "./components/TaskTracker";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/tracker" element={<TaskTracker />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
