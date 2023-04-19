import { TextField, Stack, InputAdornment } from "@mui/material";
import { useState } from "react";

export const TextFieldMUI = () => {
  const [text, setText] = useState("");

  return (
    <Stack spacing={4} mt={5}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name1" variant="outlined" />
        <TextField label="Name2" variant="filled" />
        <TextField label="Name3" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" color="secondary"></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Text Input" required></TextField>
        <TextField
          label="Text Input"
          helperText="Enter your name here"
        ></TextField>
        <TextField label="Password" type="password"></TextField>
        <TextField label="Disable" disabled />
        <TextField
          label="ReadOnly"
          value="Test"
          InputProps={{ readOnly: true }}
        />
        <TextField label="Error" error={false} />
      </Stack>

      <Stack direction="row">
        <TextField
          label="Text Input"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          error={!text}
          helperText={!text ? "This field is required" : ""}
        ></TextField>
      </Stack>

      <Stack direction="row">
        <TextField
          label="Payment"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Php</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Height"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
