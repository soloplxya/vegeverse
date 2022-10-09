import type { NextPage } from "next";
import { Parallax } from "react-parallax";

const Mission: NextPage = () => {
  return (
    <main>
      <div id="page-wrap">
        <div style={{ textAlign: "center" }}>
          <Parallax
            bgImage="/mission.jpg"
            strength={700}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 500, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-5xl p-2 text-white font-bold">
                Our Mission
              </div>
            </div>
          </Parallax>
          <Parallax strength={700} style={{ width: "100vw" }}>
            <div
              style={{ height: 500, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="grid grid-cols-3 p-10 align-middle">
                <div className="text-2xl mx-10 text-left">
                  <p>
                    The Vegeverse Mission is to do our part for the earth by{" "}
                    <b>planting</b> more trees, crops and natural agriculture.
                  </p>
                </div>
                <div className="text-2xl mx-10 text-left">
                  <p>
                    We want to close the gap for those that put food and warmth
                    on our tables everyday and we firmly believe in the{" "}
                    <b>equitable treatment</b> and sharing of profits with
                    farmers.
                  </p>
                </div>

                <div className="text-2xl mx-10 text-left">
                  <p>
                    It is our hope that everyone on the planet will have{" "}
                    <b>access</b> to organic, fresh and ethically grown produce.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </main>
  );
};

export default Mission;
