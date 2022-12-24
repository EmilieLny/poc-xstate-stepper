import "./App.css";
import { ClickedPage, StepperPage } from "./pages";
import { Divider } from "antd";

function App() {
  return (
    <div className="App">
      Hello word
      <Divider />
      <ClickedPage />
      <Divider />
      <StepperPage />
    </div>
  );
}

export default App;
