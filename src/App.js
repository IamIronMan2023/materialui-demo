import "./App.css";
import { TypographyMUI } from "./components/TypographyMUI";
import { LayoutMUI } from "./components/LayoutMUI";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* <TypographyMUI></TypographyMUI> */}
      <LayoutMUI />

      <Box sx={{ mt: 20 }} />
    </div>
  );
}

export default App;
