import { TypographyMUI } from "./components/TypographyMUI";
import { LayoutMUI } from "./components/LayoutMUI";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ButtonMUI } from "./components/ButtonMUI";
import { TextFieldMUI } from "./components/TextFieldMUI";
import { GridMUI } from "./components/GridMUI";
import { SelectMUI } from "./components/SelectMUI";
import { RadioButtonMUI } from "./components/RadioButtonMUI";
import { CheckboxMUI } from "./components/CheckboxMUI";
import { SwitchMUI } from "./components/SwitchMUI";
import { red } from "@mui/material/colors";
import { StyleMUI } from "./components/StyleMUI";
import { MenuMUI } from "./components/MenuMUI";
import { NavbarMUI } from "./components/NavbarMUI";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      // primary: {
      //   main: brown[600],
      // },
      myCustomColor: {
        main: red[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarMUI />
      <Container>
        <TypographyMUI />
        <LayoutMUI />
        <ButtonMUI />
        <TextFieldMUI />
        <GridMUI />
        <SelectMUI />
        <RadioButtonMUI />
        <CheckboxMUI />
        <SwitchMUI />
        <StyleMUI />
        <MenuMUI />

        <Box sx={{ mt: 20 }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
