import "./App.css";
import "tailwindcss";
import { AppStyles } from "./App.styles";
import { useState } from "react";

function App() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <>
      <div className="flex  bg-amber-800 m-10">
        <text className="p-10 font-medium text-2xl text-white">
          {"The Coffee Team"}
        </text>
      </div>
      <div className="flex gap-6 mx-10 overflow-hidden mb-20">
        <div
          className={hover2 ? AppStyles.scaleDownDiv1 : AppStyles.scaleDiv1}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}>
          <div className="relative">
          <img
            className={AppStyles.imageFit}
            src="/src/assets/images/brewingCoffee.jpg"
          ></img>
          <text className="absolute bottom-8 right-10 font-medium text-xl text-white font-serif ">{'Product'}</text>
</div>
<div  className="relative">
          <video
            src="src/assets/videos/coffeepour.mp4"
            muted
            autoPlay
            loop
            controls
           
          ></video>
           <text className="absolute bottom-10 right-10 font-medium text-xl text-white font-serif ">{'Process'}</text>
        </div>
</div>
        <div
          className={hover1 ? AppStyles.scaleDownDiv2 : AppStyles.scaleDiv2}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <div className="relative">
          <img
            className={AppStyles.imageFit}
            src="/src/assets/images/brewingCoffee.jpg"
          ></img>
          <text className="absolute bottom-10 right-10 font-medium text-xl text-white font-serif ">{'Product'}</text>
        </div>
        <div className="relative">
          <video
            src="src/assets/videos/coffeebeans.mp4"
            muted
            autoPlay
            loop
            className="mb-10"
            controls
          ></video>
        <text className="absolute bottom-10 right-10 font-medium text-xl text-white font-serif ">{'Components'}</text>
        </div>
        <div className="relative">
          <img
            className={AppStyles.imageFit}
            src="/src/assets/images/services.webp"
          ></img>
           <text className="absolute bottom-10 right-10 font-medium text-xl text-white font-serif ">{'Services'}</text>
    
          </div>
          <div className="bg-amber-800 p-30">
            <text className="font-serif font-medium italic text-2xl text-white text-left ">
              {"Love, brewed!"}
            </text>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
