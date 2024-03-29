import { createRoot } from "react-dom/client";
import { Stage } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";

const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width
};

function App() {
  return (
    <Stage options={OPTIONS}>
      <RotatingBunny x={width / 2} y={height / 2} />
    </Stage>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
