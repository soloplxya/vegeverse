import type { NextPage } from "next";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";
import VoteItem from "../components/vote/voteItem";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import TokenAbi from "./api/data/token_abi.json";
import GovernanceAbi from "./api/data/governance_abi.json";
import TimelockAbi from "./api/data/timelock_abi.json";
import fs from "fs";

const proposalsFile = "proposals.json";
const chainId = 31337;

export default function Propose() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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

  async function execute(args: any[], functionToCall: string, proposalDescription: string) {
    if (typeof window.ethereum !== "undefined") {
      const tokenContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const governanceContractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      const timelockContractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

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

      try {
        console.log("Executing")
        const name = await tokenContract.name();
        setName(name);
        console.log(name);

        console.log(tokenContract)

        const encodedFunctionCall = tokenContract.interface.encodeFunctionData(functionToCall, args);
        console.log(`Proposing ${functionToCall} on ${tokenContractAddress} with ${args}`);
        console.log(`Proposal Description:\n  ${proposalDescription}`);
        const proposeTx = await governanceContract.propose(
          [tokenContract.address],
          [0],
          [encodedFunctionCall],
          proposalDescription
        );

        const proposeReceipt = await proposeTx.wait(1);
        const proposalId = proposeReceipt.events[0].args.proposalId;
        console.log(`Proposed with proposal ID:\n  ${proposalId}`);

        const proposalState = await governanceContract.state(proposalId)
        const proposalSnapShot = await governanceContract.proposalSnapshot(proposalId)
        const proposalDeadline = await governanceContract.proposalDeadline(proposalId)
        // save the proposalId
        storeProposalId(proposalId);

        // The state of the proposal. 1 is not passed. 0 is passed.
        console.log(`Current Proposal State: ${proposalState}`)
        // What block # the proposal was snapshot
        console.log(`Current Proposal Snapshot: ${proposalSnapShot}`)
        // The block number the proposal voting expires
        console.log(`Current Proposal Deadline: ${proposalDeadline}`)

        // try a contract function
        // try functions here
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  function storeProposalId(proposalId: any) {
    let proposals: any;

    if (fs.existsSync(proposalsFile)) {
      proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    } else {
      proposals = {};
      proposals[chainId] = [];
    }
    proposals[chainId].push(proposalId.toString());
    // fs.writeFileSync(proposalsFile, JSON.stringify(proposals), "utf8");
    fs.writeFile('./myFile.json', JSON.stringify(proposals), (err) => {
      if (err) console.log('Error writing file:', err);
    })
  }

  return (
    <main>
      <div id="outer-container">
        <div className={styles.container}>
          <div>
            <input type="text" onChange={e => setDesc(e.target.value)} />
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
              <Button onClick={() => execute([], "name", desc)}>Propose</Button>
            ) : (
              ""
            )}
          </div>
          <div>
            New Proposal: {desc}
          </div>
        </div>
      </div>
    </main>
  );
};
