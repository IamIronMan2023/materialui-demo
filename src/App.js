import "./App.css";
import { TypographyMUI } from "./components/TypographyMUI";
import { LayoutMUI } from "./components/LayoutMUI";
import { Box } from "@mui/material";
import { ButtonMUI } from "./components/ButtonMUI";

function App() {
  return (
    <div className="App">
      <TypographyMUI />
      <LayoutMUI />
      <ButtonMUI />

      <Box sx={{ mt: 20 }} />
    </div>
  );
}

export default App;
