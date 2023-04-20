import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const CheckboxMUI = () => {
  const [agree, setAgree] = useState(false);
  console.log(agree);

  return (
    <Box sx={{ mt: 10 }}>
      <Box>
        <FormControlLabel
          label="I agree on terms and condition"
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
          }
        ></FormControlLabel>

        <Box>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
        </Box>
      </Box>
    </Box>
  );
};
