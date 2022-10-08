import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hamburger from '../components/hamburger'
import { Parallax } from 'react-parallax';

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";


const Mission: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap"> 
        <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={ image1 } strength={700} style={{ width: '100vw' }}>
          <div style={{ height: 400, width: '100vw' }} className="grid h-screen place-items-center">
            <div className="text-3xl p-2">OUR MISSION</div>
          </div>
        </Parallax>
        <Parallax strength={700} style={{ width: '100vw' }}>
          <div style={{ height: 500, width: '100vw' }} className="grid h-screen place-items-center">
            <div className="text-3xl px-2 mx-10">
              <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div> 
        </Parallax>
      </div>
      </div>
    </main>
  )
}

export default Mission