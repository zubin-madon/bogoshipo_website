import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Bogoshipo</title>
        <meta
          name="description"
          content="Project Introduction to Upcoming Blockchain Pet Game"
        />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Blockchain Pet Game" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta property="og:title" content="Bogoshipo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://bogoshipo.com" />
        <meta
          property="og:image"
          content="https://www.bogoshipo.com/logo512.png"
        />
        <meta property="og:description" content="Blockchain Pet Game" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <section className="body-font">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
              <h1 className="mb-5 text-4xl">What Is Bogoshipo?</h1>
              <p className="mb-8 text-2xl text-primary">
                A near serverless game developed in Unity. Users breed and raise
                virtual pets on the blockchain. Players start by adopting a pet
                from the pet shelter. To raise healthy and happy pets, players
                must care for them, play mini-games with them and indulge them
                with a variety of accessories, grooming, spa treatments and
                more. Only healthy and happy pets are allowed to breed and spawn
                new variants.
                <br />
                <br /> Bogoshipo&apos;s breeding algorithm is designed to create
                surprising and shocking new variants which inherit traits from
                the parents. We used Unity Shader Graphs to create thousands of
                textures and millions of colour swatch permutations. Combined
                with hundreds of variant body parts created by a formidable
                line-up of character artists, Bogoshipo will throw up shocking
                and exciting new pet characters which can be traded as NFTs.{" "}
                <br />
                <br />
                Bogoshipo brings back 90&apos;s nostalgia of Tamagotchi, infused
                with a heavy dose of steroids thanks to cutting edge Anima 2D
                bone animations, which transmogriphy the Pets into truly
                sentient, living, breathing beings.
              </p>

              <div className="flex text-gray-300 lg:flex-row md:flex-col">
                <button className="inline-flex items-center px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs text-neutral-content">
                      COMING SOON
                    </span>
                    <span className="font-medium title-font">Google Play</span>
                  </span>
                </button>
                <button className="inline-flex items-center px-5 py-3 mt-0 ml-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 md:mt-4 lg:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs text-neutral-content">
                      COMING SOON
                    </span>
                    <span className="font-medium title-font">App Store</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 animate-pulse">
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <Image
                      className="object-cover object-center rounded"
                      layout="intrinsic"
                      width={310}
                      height={570}
                      alt="hero"
                      src="/assets/phone_preview.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
