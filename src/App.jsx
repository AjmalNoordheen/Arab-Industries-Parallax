import "./App.css";
import SlideCorasel from "./SlideCorasel.jsx";
import './index.js'

function App() {
  return (
    <div className="w-screen  bg-slate-900">
      <div className="parallex relative flex justify-center items-center h-[65vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src="/leaf.png "
          id="leaf"
          className="mainLeaf top-0 left-0 absolute  w-[100%] pointer-events-none"
          alt=""
        />
        <h1 className="text1 font-bold absolute  text-white text-2xl sm:text-4xl md:text-5xl z-10 ">
          Welcome to the World of Nature
        </h1>
        <img
          src="/fallLeaf.png"
          className="fallleaf absolute w-14 xl:w-16 2xl:w-20"
          alt=""
        />
        <img
          src="/fallLeaf.png"
          className="fallleaf2 absolute w-11 xl:w-12 2xl:w-14"
          alt=""
        />
        <img
          src="/fallLeaf.png"
          className="fallleaf3 absolute w-16 xl:w-18 2xl:w-24"
          alt=""
        />
        <img
          src="/fallLeaf.png"
          className="fallleaf4 absolute w-12 xl:w-14 2xl:w-18"
          alt=""
        />
        <img
          src="/fallLeaf.png"
          className="fallleaf5 absolute w-10 xl:w-12 2xl:w-16"
          alt=""
        />
      </div>
      <SlideCorasel />
      <div className="w-screen h-full">
        <div
          style={{
            backgroundImage: "url(banner1.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="w-full  flex justify-center items-center h-[25rem] bg-yellow-50"
        >
          <div className="w-9/12 backdrop-blur-sm md:flex-row    gap-2 overflow-scroll items-center h-[92%] ">
            <img src="anthu.jpeg" className="w-1/3 border  h-fit" alt="" />
            <p className="text-slate-300">
              <h1 className="text-xl text-white">Anthoruim</h1>
              Anthurium andraeanum is a tropical plant that is highly prized for
              its stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available, Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(banner.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="w-full flex justify-center items-center h-[25rem] bg-yellow-50"
        >
          <div className="w-9/12 backdrop-blur-sm md:flex-row    gap-2 overflow-scroll items-center h-[92%] ">
            <img src="22.webp" className="w-1/3 border  h-fit" alt="" />
            <p className="text-slate-300">
              <h1 className="text-xl text-white">Florida</h1>
              Anthurium andraeanum is a tropical plant that is highly prized for
              its stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available, Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately.
            </p>
          </div>{" "}
        </div>
        <div
          style={{
            backgroundImage: "url(banner2.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="w-full flex justify-center items-center h-[25rem] bg-yellow-50"
        >
          <div className="w-9/12 backdrop-blur-sm md:flex-row    gap-2 overflow-scroll items-center h-[92%] ">
            <img src="111.jpg" className="w-1/3 border  h-fit" alt="" />
            <p className="text-slate-300">
              <h1 className="text-xl text-white">Rosell</h1>
              Anthurium andraeanum is a tropical plant that is highly prized for
              its stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available, Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately, bright red flower and
              yellow spadix. Many anthurium cultivars are available,Anthurium
              andraeanum is a tropical plant that is highly prized for its
              stately, bright red flower and yellow spadix. Many anthurium
              cultivars are available,Anthurium andraeanum is a tropical plant
              that is highly prized for its stately.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default App;
