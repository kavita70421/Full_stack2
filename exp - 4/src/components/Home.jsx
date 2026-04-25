import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { dark } = useContext(ThemeContext);

  return (
    <h2 style={{ color: dark ? "white" : "black", background: dark ? "black" : "white" }}>
      Home Page
    </h2>
  );
}

export default Home;