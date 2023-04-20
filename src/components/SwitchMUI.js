import { Box, FormControlLabel, Switch } from "@mui/material";

export const SwitchMUI = () => {
  return (
    <Box>
      <FormControlLabel label="Dark mode" control={<Switch />} />
    </Box>
  );
};
