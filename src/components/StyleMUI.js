import { Grid, Box, styled } from "@mui/material";

const inlineStyle = {
  fontSize: "1rem",
  width: 200,
  height: 100,
  border: "solid 10px yellow",
  color: "primary.main",
  backgroundColor: "blue",
};

const sxStyle = {
  fontSize: "1rem",
  width: 200,
  height: 100,
  border: "solid 10px yellow",
  color: "primary.main",
  backgroundColor: "red",
};

const MyStyledBox = styled(Box)(({ theme }) => ({
  fontSize: "1rem",
  width: 200,
  height: 100,
  border: "solid 10px orange",
  color: theme.palette.main,
  backgroundColor: "green",
}));

export const StyleMUI = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              fontSize: "1rem",
              width: 200,
              height: 100,
              border: "solid 10px yellow",
              color: "primary.main",
              paddingLeft: 2,
            }}
          >
            Direct
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box style={inlineStyle}>inline Style</Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={sxStyle}>sxStyle</Box>
        </Grid>
        <Grid item xs={12}>
          <MyStyledBox>Styled Component</MyStyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};
