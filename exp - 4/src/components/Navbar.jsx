import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: dark ? "black" : "lightgray", padding: "10px" }}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Navbar;