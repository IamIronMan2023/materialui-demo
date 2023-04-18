import { Box, Container, Typography, Button, Stack } from "@mui/material";

export const LayoutMUI = () => {
  return (
    <Container>
      <Box sx={{ backgroundColor: "green" }}>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nemo
          ullam consequatur incidunt illum quos excepturi sequi ea sapiente
          eaque laborum, quasi explicabo quidem, iure corporis rem deserunt
          consequuntur ratione, doloribus totam voluptatum quia minus. Error,
          eveniet commodi. Ipsa dolor officiis recusandae. Minima saepe maiores
          perferendis. Rem nulla laudantium itaque?
        </Typography>
        <Button>Send</Button>
      </Box>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={10}
      >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Stack>
    </Container>
  );
};
