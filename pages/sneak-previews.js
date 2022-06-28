import React from "react";
import { Fragment } from "react";
import Image from "next/image";

function SneakPreviews() {
  return (
    <Fragment>
    <h1 className="px-24 text-4xl text-center m-10">Previews </h1>
    <div className="flex justify-center w-full py-2 gap-3">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
      <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full justify-center text-center flex-col">
        <div className="px-48"><Image
            src="/assets/unity.png"
            layout="responsive"
            width={1260}
            height={700}
          />
          <p className="m-10 text-primary-focus text-2xl">
            Inside the Unity Game Engine
          </p></div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full justify-top text-center flex-col"
        >
          <div className="mt-10"><Image
            src="/assets/character_samples.png"
            layout="responsive"
            width={1500}
            height={350}
          />
          <p className="text-primary-focus text-2xl">
            Bogo Pet sprites are designed in greyscale and use Unity Shader
            Graph for colour and textures. The pets will have a vast variety of phenotypic variations in body parts which are continously added by our in-house artists. 
            We will have special themed variants introduced from time to time, which will be prized genetic strains. These strains will slowly mix with the existing Bogo population 
            creating unpredictable variants. Unity Shader graphs will provide a near-unlimited number of textures and patterns, adding further diversity to the Bogo gene pool.
          </p> </div>  
        </div>
        <div id="item3" className="carousel-item w-full justify-center text-center flex-col">
        <div className="px-48"><video controls 
            src="/assets/animation2.mp4"
          />
          <p className="m-5 text-primary-focus text-2xl">
            Anima 2D Bone Animation
          </p></div>
        </div>

    

        
      </div>
     
      <div class="divider"></div> 
    </Fragment>
  );
}

export default SneakPreviews;
