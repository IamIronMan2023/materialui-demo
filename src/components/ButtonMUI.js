import { Stack, Button, IconButton } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export const ButtonMUI = () => {
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
    </Stack>
  );
};
