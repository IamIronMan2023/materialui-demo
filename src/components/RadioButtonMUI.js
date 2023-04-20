import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import { useState } from "react";

export const RadioButtonMUI = () => {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ mt: 10 }}>
      <FormControl>
        <FormLabel id="year-label">Years of experience</FormLabel>
        <RadioGroup
          row
          name="experience"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel
            labelPlacement="start"
            value="0-2"
            control={<Radio size="small" color="secondary" />}
            label="0-2 years"
          ></FormControlLabel>
          <FormControlLabel
            labelPlacement="start"
            value="3-5"
            control={<Radio size="small" color="secondary" />}
            label="3-5 years"
          ></FormControlLabel>
          <FormControlLabel
            labelPlacement="start"
            value="6-10"
            control={<Radio size="small" color="secondary" />}
            label="6-10 years"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
