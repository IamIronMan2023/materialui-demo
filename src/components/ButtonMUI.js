import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const ButtonMUI = () => {
  const [formats, setFormats] = useState("");
  console.log(formats);

  const handleFormatChange = (e, value) => {
    setFormats(value);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text" href="https://www.google.com">
          Button Text
        </Button>
        <Button variant="contained">Button Contained</Button>
        <Button variant="outlined">Button Outlined</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<DownloadOutlinedIcon />}
          endIcon={<DownloadOutlinedIcon />}
        >
          Download
        </Button>

        <IconButton color="primary" aria-label="Download">
          <DownloadOutlinedIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2}>
        <ButtonGroup
          variant="contained"
          orientation="horizontal"
          size="small"
          disableRipple
          aria-label="button group"
        >
          <Button onClick={() => alert("Button Click")}>
            Button1
            <ArrowDropDownIcon />
          </Button>
          <Button>
            Button2
            <ArrowDropDownIcon />
          </Button>
          <Button>
            Button3
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup value={formats} onChange={handleFormatChange}>
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italics">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
