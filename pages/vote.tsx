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
          <div className="flex flex-wrap items-center justify-around">
            <VoteItem
              src="/orchids.jpg"
              description="Preserve endangered wild life orchid species in the Philippines"
            />
            <VoteItem
              src="/turtle.jpg"
              description="Sea turtle conservation in Costa Rica"
            />
            <VoteItem
              src="/pesticides.jpg"
              description="Advocate for green label pesticides in Indonesia"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
