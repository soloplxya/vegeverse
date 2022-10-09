import VoteItem from "../components/vote/voteItem";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Vote() {
  const [yesVotes, setYesVotes] = useState(0);
  return (
    <main>
      <p className="py-4 px-12 font-bold text-3xl" >Proposals you havent voted on yet</p>
      <div id="outer-container">
        <div className={styles.container}>
          <div className="flex flex-wrap items-center justify-around">
            <VoteItem
              proposalId="104820364462569492828607790431674346423199636174548503906693123371839820486615"
              src="/orchids.jpg"
              description="Preserve endangered wild life orchid species in the Philippines"
            />
            <VoteItem
              proposalId="44145297564339022526220791074829791070895106688616679781103992868913397403193"
              src="/turtle.jpg"
              description="Sea turtle conservation in Costa Rica"
            />
            <VoteItem
              proposalId="52232028879584439906020770981998830608013625569908067183890465866160585226015"
              src="/pesticides.jpg"
              description="Advocate for green label pesticides in Indonesia"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
