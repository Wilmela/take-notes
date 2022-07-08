import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import 'aos/dist/aos.css'

import { NoteContextProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <NoteContextProvider>
    <Router>
      <App />
    </Router>
  </NoteContextProvider>
);
