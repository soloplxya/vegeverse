import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import GovernanceAbi from "../../pages/api/data/governance_abi.json";
import { ethers } from "ethers";
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
  const { src, description } = props;
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect(vote: number) {
    if (typeof window.ethereum !== "undefined") {
      const ethereum = window.ethereum;
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
        execute(vote);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute(vote: number) {
    if (typeof window.ethereum !== "undefined" && isConnected) {
      const governanceContractAddress =
        "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      const governanceContract = new ethers.Contract(
        governanceContractAddress,
        GovernanceAbi,
        signer
      );
      try {
        console.log(vote);
        // await governanceContract.castVote(vote);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please check your Metamask configurations.");
    }
  }

  return (
    <ChakraProvider theme={theme} resetCSS>
      <ThemeProvider theme={muiTheme}>
        <Card sx={{ maxWidth: 275, minHeight: 300 }}>
          <CardActionArea>
            <CardMedia component="img" image={src} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" onClick={() => connect(1)}>
              Yes
            </Button>
            <Button size="small" onClick={() => connect(0)}>
              No
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default VoteItem;
