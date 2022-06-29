import React from "react";
import Image from "next/image";

function Team() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-6xl text-base-content p-3">
            The Team
          </h1>
          
        </div>
        <div className="flex flex-wrap -m-2 text-2xl">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
              <Image
                alt="Zubin Madon"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/zubin.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
                <h2 className="text-neutral-content title-font font-medium pl-5">
                  Zubin Madon
                </h2>
                <p className="text-primary pl-5">Founder | Project Head | Dev</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
            <Image
                alt="Andre"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/andre.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
               <h2 className="text-neutral-content title-font font-medium pl-5">Andre Francavilla</h2>
                <p className="text-primary pl-5">Unity Dev | UX and Game Flow</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
            <Image
                alt="Claudia"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/claudia.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
               <h2 className="text-neutral-content title-font font-medium pl-5">Claudia Rizzo</h2>
                <p className="text-primary pl-5">Character Artist | UI Head</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
            <Image
                alt="Lipi Gupta"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/lipi.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
               <h2 className="text-neutral-content title-font font-medium pl-5">Lipi Gupta</h2>
                <p className="text-primary pl-5">Artist | Animator</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
            <Image
                alt="Pavlo Dolhotor"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/pavlo.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
               <h2 className="text-neutral-content title-font font-medium pl-5">Pavlo Dolhotor</h2>
                <p className="text-primary pl-5">Unity Dev</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg bg-primary-content">
            <Image
                alt="Latifa Oubennacer"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="/assets/anon.png"
                layout="fixed"
                width={56}
                height={56}
              />
              <div className="flex-grow">
               <h2 className="text-neutral-content title-font font-medium pl-5">Latifa Oubennacer</h2>
                <p className="text-primary pl-5">Anima 2D Specialist</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Team;
