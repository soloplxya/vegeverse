import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hamburger from '../components/hamburger'
import { Parallax } from 'react-parallax';

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}
  
const Mission: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap" className={styles.container}  > 
        <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={ image1 } strength={500}>
          <div style={{ height: 1000, width: 1000 }} className="grid h-screen place-items-center">
            <div className="text-3xl p-2">OUR MISSION</div>
          </div>
        </Parallax>
      < h1>| | |</h1>
      </div>
      </div>
    </main>
  )
}

export default Mission