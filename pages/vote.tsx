import type { NextPage } from "next";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";
import VoteItem from "../components/vote/voteItem";
import ProgressBar from "../components/vote/ProgressBar";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Vote() {
  const [yesVotes, setYesVotes] = useState(0);
  return (
    <main>
      <div id="outer-container">
        <div className={styles.container}>
          <ProgressBar bgcolor={"#6a1b9a"} completed={yesVotes} />
          <VoteItem />
        </div>
      </div>
    </main>
  );
}
