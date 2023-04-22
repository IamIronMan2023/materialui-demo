import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export const MenuMUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>

      <Button variant="contained" onClick={handleClick}>
        Open Menu2
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
