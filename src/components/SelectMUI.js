import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const SelectMUI = () => {
  const [language, setLanguage] = useState([]);
  console.log(language);

  return (
    <Box sx={{ mt: 10 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="language-label">Language</InputLabel>
        <Select
          multiple
          labelId="language-label"
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="EN">English</MenuItem>
          <MenuItem value="TAG">Tagalog</MenuItem>
          <MenuItem value="CN">Chinese</MenuItem>
        </Select>
        <FormHelperText>Select Language</FormHelperText>
      </FormControl>

      <TextField select label="Language" helperText="Select Language">
        <MenuItem value="EN">English</MenuItem>
        <MenuItem value="TAG">Tagalog</MenuItem>
        <MenuItem value="CN">Chinese</MenuItem>
      </TextField>
    </Box>
  );
};
