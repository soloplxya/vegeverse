import type { NextPage } from 'next'
import Hamburger from '../components/hamburger'
import Typewriter from 'typewriter-effect';
import { Parallax } from 'react-parallax';
import Chakra from '../components/chakra'

const Home: NextPage = () => {
  return (
    <Chakra>
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
                    typewriter.typeString('<p style="color: #808080"> Welcome to <strong> Vegeverse</strong>!</p>')
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
          <Parallax strength={600} style={{ width: '100vw' }}>
            <div style={{ height: 600, width: '100vw' }} className="grid h-screen place-items-center">
              <div className="text-3xl px-2 mx-10">
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Parallax>
        </div>
        </div>
        </main>
      </Chakra>
  )
}

export default Home
