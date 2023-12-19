import "./App.css";
import SlideCorasel from "./SlideCorasel.jsx";
import "./paral.js"; 


function App() {
 
  return (
    <div className="w-screen  bg-slate-900">
      <div  className="parallex relative flex justify-center items-center h-[100vh]">
        <img src="/leaf.png " id="leaf" className="mainLeaf top-0 left-0 absolute  w-[100%] pointer-events-none" alt="" />
        <h1 className="text1 font-bold absolute  text-white text-5xl z-10 ">Welcome to the World of Nature</h1>
        <img src="/fallLeaf.png" className="fallleaf absolute w-14 xl:w-16 2xl:w-20" alt="" />
        <img src="/fallLeaf.png" className="fallleaf2 absolute w-11 xl:w-12 2xl:w-14" alt="" />
        <img src="/fallLeaf.png" className="fallleaf3 absolute w-16 xl:w-18 2xl:w-24" alt="" />
        <img src="/fallLeaf.png" className="fallleaf4 absolute w-12 xl:w-14 2xl:w-18" alt="" />
        <img src="/fallLeaf.png" className="fallleaf5 absolute w-10 xl:w-12 2xl:w-16" alt="" />
      </div>
      <SlideCorasel/>
      <div>
        
      </div>
    </div>
  );
}
export default App;
