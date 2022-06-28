import React from "react";
import { Fragment } from "react";

function DeepDive() {
  return (
    <Fragment>
      <div
        tabIndiex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
            What Makes Bogoshipo Unique?
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
            Bogoshipo will be initially launched as a completely server less
            game. The client app will update the game state in increments to the
            blockchain. Every client will be able to perfectly rebuild the
            game-world using on-chain data. As the game becomes popular and more
            users get on board, there is the possibility of leveraging
            decentralized file-sharing platforms to offload computation for
            low-powered client hardware without sacrificing the ability to fully
            verify the game state. <br />
            <b>
              Bogoshipo will be simultaneously released as Android/iOS/Win10
              builds.
            </b>
          </p>
        </div>
      </div>

      <div
        tabIndiex="1"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
            Breeding Algorithm
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
          Bogoshipo&apos;s pet gene system and the breeding algorithm will
                  create the widest, most shocking pet variants; with millions
                  of colour permutations, thousands of Unity shaders, textures
                  and patterns, and hundreds of varied body parts created by our
                  formidable line-up of character artists. We are confident that
                  our pet variants will surpass any other games in its class and
                  create an exciting market for NFT collectors.
          </p>
        </div>
      </div>

      
      <div
        tabIndiex="2"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
          UX and Animation
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
          Animations are what bring our pets to life and convince the
                  carers that their virtual friend is a sentient being. We are
                  extremely proud of our detailed bone animations, created by
                  Moroccon artist Latifa Oubennacer. Our skeletal animations can
                  be applied seamlessly to all future pet variants and will
                  accommodate a wide range of body part sprites. This
                  tremendously reduces costs and dev time compared to
                  conventional sprite animations. Bogoshipo&apos;s UX aims to
                  create an emotional attachment between the user and the pet.
                  The pet will exhibit a variety of emotions, and user effort
                  will be rewarded with affectionate gestures such as slurpy
                  tongue licks.
          </p>
        </div>
      </div>




      <div
        tabIndiex="3"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
          Mini-games
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
          Bogoshipo will have many mini-games within the main game.
                  These games will challenge the player&apos;s dexterity and
                  cognitive function. Winning points in these games will
                  increase the pet&apos;s health and happiness quotient. We plan
                  to add a p2e component into the mix.
          </p>
        </div>
      </div>

      <div
        tabIndiex="4"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
          Pet Memorial
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
          Deceased pets will be immortalized in the “pet memorial”
                  within the game. Users will also have the option of making
                  custom designed NFTs as memorials on our upcoming platform
                  eternally.live. Eternally will be an NFT platform where users
                  can memorialize departed loved ones.
          </p>
        </div>
      </div>



      <div
        tabIndiex="5"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl text-base-content p-3">
          Gene System Explained
          </h1>
        </div>
        <div className="collapse-content">
          <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
          It is difficult to condense the entire gene system code in
                  this section, but we will attempt to touch on it at a very
                  superficial level. Every pet has a list of body parts and
                  components that defines it. Every component has a set of
                  variables that contain information about size, colour, and
                  inheritability.
          </p>
          <table className="border border-primary-focus">
                  <tbody>
                    <tr className="border border-primary-focus">
                      <td>
                        <b>Pet</b>
                      </td>
                    </tr>
                    <tr className="border border-primary-focus">
                      <td className="border border-primary-focus">AssetID</td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        BodyPart[]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        InheritableBodyPartNum
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
                  Above is a placeholder representation of how the pet will live
                  inside Unity, the amount of data seems scarce because it is
                  merely an illustration of the gene-based inheritance. As you
                  can see, there is an array of BodyPart and another variable
                  called ‘InheritableBodyPartNum&apos;. bPartNum is a number that is
                  randomly assigned upon pet creation and represents the number
                  of body parts that will be marked as inheritable. Inheritance
                  evaluation will be dealt with inside BodyPart.
                </p>

                <table className="border border-primary-focus">
                  <tbody>
                    <tr>
                      <td className="border border-primary-focus">
                        <b>BodyPart</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">Name</td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">Sprite</td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">Size</td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        Inheritable
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        InheritableChance
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
                  Other than the standard body part characteristics within
                  BodyPart, there are two extremely important variables:
                  Inheritable and InheritableChance. Inheritable is a variable
                  that marks the body component as something that can then
                  appear on the child. In other words: if Inheritable is true on
                  Pet A but is false on Pet B, then the child will have Pet A&apos;s
                  body part sprite with mixed characteristics gathered from both
                  parents.{" "}<br/>
                
                
                  At this point, you might be telling yourself: Great! That
                  sounds straightforward, but what is the chance for, and why
                  does it exist?<br/>
                
               
                  Ref. to the table below:<br/>
                </p>

                <table className="border border-primary-focus">
                  <tbody>
                    <tr>
                      <td className="border border-primary-focus">
                        <b>Body Parts (inheritable chance)</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        <b>Pet A</b>
                      </td>
                      <td className="border border-primary-focus">Pet B</td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        Body Type: 20%
                      </td>
                      <td className="border border-primary-focus">
                        Body Type: 60%
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        Whiskers: 40%
                      </td>
                      <td className="border border-primary-focus">
                        Whiskers: 16%{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-primary-focus">
                        Ears: 50%{" "}
                      </td>
                      <td style={{ border: "1px solid accent-focus" }}>
                        Ears: 10%{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-primary text-xl text-justify bg-primary-content p-5 rounded-lg">
                  Consider that all three components on both pets (Body Type,
                  Whiskers, Ears) are marked as inheritable. How would we define
                  which characteristics the child will inherit? The inheritance
                  algorithm compares the chances of inheritance between both
                  parents, making the child inherit characteristics that are
                  part of the parent that has the highest inheritance chance.
                  The child&apos;s inherited body part&apos;s chance will then be a random
                  number given within a range of Pet A&apos;s body part chance and
                  Pet B&apos;s body part chance.<br/>
               
                  <b>
                    To understand this better: A child gets Pet B&apos;s body type. A
                    child&apos;s Body Type inheritable chance will be a random number
                    between 20% and 60% (refer to values present in the table
                    above).{" "}
                  </b>
                </p>
                <br />
        </div>
      </div>
    </Fragment>
  );
}

export default DeepDive;
