import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hamburger from '../components/hamburger'

const Home: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap" className={styles.container} >
          <h1>This will be the homepage.</h1>
          <h2></h2>
      </div>
    </main>
  )
}

export default Home
