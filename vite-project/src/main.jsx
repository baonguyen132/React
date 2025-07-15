import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoList from "./todoList/todoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList></TodoList>
  </StrictMode>
);
