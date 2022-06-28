import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { useFirstRender } from "../components/use-first-render";


function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const firstRender = useFirstRender();

  const [state, handleSubmit] = useForm("mbjweqyn");

    function errorAlert() {
        alert("cannot leave any field blank.")
    }
    if (state.succeeded) {
        console.log(state)
                return <p className="text-2xl text-primary-focus py-24 text-center">Thanks! We will get back to you ASAP! For a faster response DM us on <a className="text-accent-content" href="https://twitter.com/bogoshipo_pets" target="_blank" rel="noreferrer" alt="twitter">Twitter.</a></p>;
        }

  return (
    <form className="text-primary-focus bg-primary-content body-font relative" onSubmit={(fullname.length>0 && email.length>0 && message.length > 0) ? handleSubmit : errorAlert}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-base-content">
            Get In Touch!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-primary" htmlFor="fullname">
                  Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => {
              setFullname(e.target.value);
            }}
                  className="w-full bg-neutral bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError 
            prefix="fullname" 
            field="fullname"
            errors={state.errors}
      />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-primary">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
                  className="w-full bg-neutral bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
                  className="w-full bg-neutral bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </div>
            </div>
            <div className="p-2 w-full">
            <button className="btn btn-ghost flex mx-auto border-primary-focus text-lg" type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className="text-red-400"></a>
              
              <span className="inline-flex">
                
                <a className="px-5" href="https://twitter.com/bogoshipo_pets" target="_blank" rel="noreferrer" alt="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="white"></path> </svg>
                </a>

                <a className="px-5" href="https://discord.gg/zddfzcNRCV" target="_blank" rel="noreferrer" alt="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="white"></path> </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
