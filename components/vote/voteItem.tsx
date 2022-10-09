import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme();

const muiTheme = createTheme();

const VoteItem = (props: any) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ThemeProvider theme={muiTheme}>
        <Card sx={{ maxWidth: 275, minHeight: 300 }} variant="outlined">
          <CardActionArea>
            <CardMedia component="img" image="/farm.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vote Item #1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default VoteItem;
