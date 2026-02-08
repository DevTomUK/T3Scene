import { createRoot } from "react-dom/client";
import "./index.css";
import T3Scene from "./T3Scene.jsx";
import Game from "./components/Game.jsx";
import { fog } from "three/tsl";

createRoot(document.getElementById("root")).render(
  // REMEMBER TO CHANGE PERFORMANCE TO DEFAULT IF YOU WANT GOOD QUALITY
  <T3Scene
    preset="performance"
    presetOverrides={{
      lighting: { ambient: { intensity: 2 } },
    }}
  >
    {/*  UNCOMMENT GAME TO HAVE IT RENDER AS THE ACTUAL SCENE */}
    {/*   Look inside Game component to see the new scene. */}
    <Game />
  </T3Scene>,
);
