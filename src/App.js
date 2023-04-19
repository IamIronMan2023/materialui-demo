import "./App.css";
import { TypographyMUI } from "./components/TypographyMUI";
import { LayoutMUI } from "./components/LayoutMUI";
import { Box, Container } from "@mui/material";
import { ButtonMUI } from "./components/ButtonMUI";
import { TextFieldMUI } from "./components/TextFieldMUI";

function App() {
  return (
    <div className="App">
      <Container>
        <TypographyMUI />
        <LayoutMUI />
        <ButtonMUI />
        <TextFieldMUI />

        <Box sx={{ mt: 20 }} />
      </Container>
    </div>
  );
}

export default App;
