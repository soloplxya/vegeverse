import type { NextPage } from "next";
import { Parallax } from "react-parallax";

const Experience: NextPage = () => {
  return (
    <main>
      <div id="page-wrap">
        <div style={{ textAlign: "center" }}>
          <Parallax
            bgImage="/farm.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 400, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-5xl p-2 font-bold text-white">
                Explore Nature
              </div>
            </div>
          </Parallax>
          <Parallax
            bgImage="/indigenous.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 400, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-5xl p-2 font-bold text-white">
                Interact With Communities
              </div>
            </div>
          </Parallax>

          <Parallax
            bgImage="/experience-3.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 400, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-5xl p-2 font-bold text-white">
                Learn about Agriculture
              </div>
            </div>
          </Parallax>

          <Parallax
            bgImage="/experience-4.jpg"
            strength={600}
            style={{ width: "100vw" }}
          >
            <div
              style={{ height: 400, width: "100vw" }}
              className="grid h-screen place-items-center"
            >
              <div className="text-5xl p-2 font-bold text-white">
                Experience Farming
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </main>
  );
};

export default Experience;
