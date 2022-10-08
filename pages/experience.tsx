import type { NextPage } from 'next'
import Hamburger from '../components/hamburger'
import { Parallax } from 'react-parallax';

const Experience: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap"> 
        <div style={{ textAlign: 'center' }}>
        <Parallax bgImage='/farm.jpg' strength={600} style={{ width: '100vw' }}>
          <div style={{ height: 700, width: '100vw' }} className="grid h-screen place-items-center">
            <div className="text-7xl p-2">EXPLORE NATURE</div>
          </div>
        </Parallax>
        <Parallax bgImage='/indigenous.jpg' strength={600} style={{ width: '100vw' }}>
          <div style={{ height: 700, width: '100vw' }} className="grid h-screen place-items-center">
            <div className="text-7xl p-2">INTERACT WITH COMMUNITIES</div>
          </div>
        </Parallax>
      </div>
      </div>
    </main>
  )
}

export default Experience
