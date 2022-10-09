import type { NextPage } from "next";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";
import VoteItem from "../components/vote/voteItem";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import TokenAbi from "./api/data/token_abi.json";
import GovernanceAbi from "./api/data/governance_abi.json";
import TimelockAbi from "./api/data/timelock_abi.json";

export default function Vote() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      const ethereum = window.ethereum;
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const tokenContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const governanceContractAddress =
        "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      const timelockContractAddress =
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

      const tokenContract = new ethers.Contract(
        tokenContractAddress,
        TokenAbi,
        signer
      );
      const governanceContract = new ethers.Contract(
        governanceContractAddress,
        GovernanceAbi,
        signer
      );
      const timelockContract = new ethers.Contract(
        timelockContractAddress,
        TimelockAbi,
        signer
      );

      try {
        // try a contract function
        // try functions here
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <main>
      <div id="outer-container">
        <div className={styles.container}>
          <div>
            {hasMetamask ? (
              isConnected ? (
                "Connected! "
              ) : (
                <Button
                  onClick={() => {
                    connect();
                  }}
                >
                  {" "}
                  Connect{" "}
                </Button>
              )
            ) : (
              "Please install metamask"
            )}
            {isConnected ? (
              <Button onClick={() => execute()}>Execute</Button>
            ) : (
              ""
            )}
          </div>

          <VoteItem />
        </div>
      </div>
    </main>
  );
}
