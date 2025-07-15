import { useState } from "react";
import "./header.scss";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function setDark() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <div className={isDarkMode ? "header dark" : "header"}>
      <h2>MyApp</h2>
      <button onClick={setDark}>
        {isDarkMode ? (
          <i class="bxr bx-sun-bright"></i>
        ) : (
          <i class="bxr  bx-moon"></i>
        )}
      </button>
    </div>
  );
}
export default Header;
