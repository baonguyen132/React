import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CallAPI from "./hook/useEffect/call";
import Routex from "./routes/Routex";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routex></Routex>
  </StrictMode>
);
