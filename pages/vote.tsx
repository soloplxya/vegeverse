import type { NextPage } from 'next'
import { ethers } from 'ethers'
import Hamburger from '../components/hamburger'
import { Button as MuiButton } from "@mui/material";
import VoteItem from '../components/vote/voteItem'


async function connectToMetamask(){
  // checks if metamask extension exists on chrome browser 
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
  // else we send an alert to the user
  } else {
    alert('MetaMask not loaded.')
    return
  }
}

const Vote: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div> 
        <MuiButton onClick={() => { connectToMetamask() }}> Connect </MuiButton> 
        <VoteItem />
      </div>
    </main>
  )
}

export default Vote
