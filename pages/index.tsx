import type { NextPage } from 'next'
import Hamburger from '../components/hamburger'
import Typewriter from 'typewriter-effect';
import { Parallax } from 'react-parallax';

const Home: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap"> 
        <div style={{ textAlign: 'center' }}>
        <Parallax bgImage='/farm.jpg' strength={600} style={{ width: '100vw' }}>
          <div style={{ height: 600, width: '100vw' }} className="grid h-screen place-items-center">
            <div className="text-4xl p-2">
              <Typewriter
                options={{
                  autoStart: true, 
                  loop: true,
                }}
                onInit={(typewriter: any) => {
                  typewriter.typeString('<p style="color: #808080"> Welcome to <strong> Vegeverse </strong>!</p>')
                    .pauseFor(300)
                    .typeString('<p style="color: #000"> A solution that utilizes blockchain technology to help local farmers grow sustainably. </p>')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
            </div> 
          </div>
        </Parallax>
      </div>
      </div>
    </main>
  )
}

export default Home
