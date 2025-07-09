import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";

import Test from "./test.jsx";
import Condition from "./condition/condition.jsx";
import App from "./App.jsx";
import UseStates from "./useState/useStates.jsx";
import Routex from "./routes/Routex.jsx";
import Button from "./test.jsx";
import List from "./readerlist/List.jsx";
import UpdateAO from "./updateAO/updateAO.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UseStates />
    <Condition state={false} />
    <App /> */}

    <UpdateAO />
  </StrictMode>
);
