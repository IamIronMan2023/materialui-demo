import { Box, Grid } from "@mui/material";

export const GridMUI = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={1}>
          <Box bgcolor={"primary.main"} color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={1}>
          <Box bgcolor={"primary.main"} color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={5}>
          <Box bgcolor={"primary.main"} color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={5}>
          <Box bgcolor={"primary.main"} color="white">
            Box
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
