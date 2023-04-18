import { Typography } from "@mui/material";

export const TypographyMUI = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1" align="left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure similique
        error officia, maiores omnis illo dicta quam nobis culpa, soluta iusto
        modi dolorum ex eaque, earum temporibus voluptas reiciendis vel harum et
        dignissimos. Harum recusandae pariatur quod rem quisquam sunt quam, id
        officiis temporibus tempora, quia aut velit, vel obcaecati.
      </Typography>
      <Typography variant="body2" align="right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quos
        nemo dicta dolore a, voluptate explicabo illum veniam. Enim, aspernatur!
        Consequuntur quasi minima alias voluptate eligendi corrupti modi
        excepturi aliquam deserunt, sed illum cupiditate neque consequatur
        earum. Aut iusto repellat minus quo, omnis dolorem labore nesciunt
        quibusdam quas voluptates laudantium?
      </Typography>

      <Typography variant="h2" component="h1">
        Heading 1
      </Typography>

      <Typography variant="h2" gutterBottom>
        Gutter bottom
      </Typography>
    </div>
  );
};
