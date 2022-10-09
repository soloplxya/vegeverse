import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import { Parallax } from "react-parallax";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

const Home: NextPage = () => {
  return (
    <main>
      <div id="page-wrap">
        <div style={{ textAlign: "center" }}>
          <Parallax
            bgImage="/landing-1.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 600, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-4xl text-white">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                  onInit={(typewriter: any) => {
                    typewriter
                      .typeString("Welcome to <strong> Vegeverse</strong>!")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .typeString("\nLet's fight climate change")
                      .deleteAll()
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                />
              </div>
            </div>
          </Parallax>
          <Parallax strength={600} style={{ width: "100vw" }}>
            <div
              style={{ height: 600, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-3xl px-2 mx-10">
                <p>
                  {" "}
                  Vegeverse is focused on solving climate change through long
                  term sustainable solutions. By joining Vegeverse, you can be
                  part of a global movement to increase the global supply of
                  fresh and ethically produced fresh produce. All while
                  supporting local farms and small owners.
                </p>
                <br />
                <p>
                  {" "}
                  <strong>Be a part of change</strong>
                </p>
              </div>
            </div>
          </Parallax>
          <Parallax
            bgImage="/landing-2.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 600, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-4xl text-white">
                <strong>How does it work?</strong>
              </div>
            </div>
          </Parallax>
          <Parallax strength={600} style={{ width: "100vw", height: 400 }}>
            <div className="grid grid-cols-2 gap-4 hover:grid-cols-2 p-10 pt-32 align-middle">
              <div className="text-3xl mx-10 text-left">
                <p className="font-bold px-10 ">
                  Vegeverse is a DAO that is run by people like you
                </p>
              </div>

              <div className=" max-h text-left text-xl">
                <p className="px-10 text-2xl ">By holding VegeCoin, you can:</p>
                <br />
                <ul className="list-inside list-disc">
                  <li>Have your say in all things related to Vegeverse</li>
                  <li>
                    Actively contribute to the maintainence of our agricultural
                    plots
                  </li>
                  <li>Book holidays in any of our farm stays</li>
                  <li>Be a part of the coolest green club in the world</li>
                </ul>
              </div>
            </div>
          </Parallax>
          <Parallax
            bgImage="/landing-3.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 600, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-4xl text-white">
                <strong>How does Vegeverse sustain itself?</strong>
              </div>
            </div>
          </Parallax>

          <Parallax strength={600} style={{ width: "100vw", height: 500 }}>
            <p className="text-3xl font-bold p-10 text-left">Vegeverse works</p>
            <div className="grid grid-cols-3 p-10 align-middle">
              <div className="text-2xl mx-10 text-left">
                <p>
                  The sale of Vegecoin will go purchasing of new farmland,
                  farming equipment and paying our local farmers equitably.
                </p>
              </div>
              <div className="text-2xl mx-10 text-left">
                <p>
                  Any other extra funds will go towards the omprovements and
                  conservations of existing farmland to house and educate our
                  Vegecoin holder family.
                </p>
              </div>

              <div className="text-2xl mx-10 text-left">
                <p>
                  Carbon Removal Credits can be generated from our plots of
                  farmland and sold for the long term sustainability of our
                  farms.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </main>
  );
};

export default Home;
