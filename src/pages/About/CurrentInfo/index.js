import React from "react";
import "./styles/CurrentInfo.scss";
import DlouhyImage from "../../../images/Mountains.jpg";
import Journey from "./Journey";

export default function CurrentInfo() {
  return (
    <>
      <div className="oneImageContainer  p-0 flex justify-start items-center">
        <img src={DlouhyImage} alt="obrazek" className="dlouhyImage" />
      </div>
      <div className="imageInfoContainer  flex justify-start items-center flex-col">
        <h1 className="lg:pt-12 pt-40">About me</h1>
        <p>Scroll Down</p>
      </div>
      <div className="infoDiv lg:container lg:mx-auto grid lg:grid-cols-5 grid-cols-1 grid-rows-1">
        <div className="hidden lg:flex "></div>

        <div className="px-10 py-2 col-span-3 text-center">
          <h1 className="pb-5">Something, you should know</h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            odio optio voluptate sint nemo laboriosam porro eligendi similique
            perspiciatis id! Repellendus impedit ratione assumenda at sequi.
            Aperiam dicta repellendus quaerat consequatur.
          </p>
          <p className="lg:pt-3 pt-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae
            iusto ullam adipisci sunt, suscipit tempora modi quisquam mollitia
            corporis, aut veritatis dolor consequuntur praesentium dolores eos
            quod. Quos, quidem explicabo tenetur eveniet dolorem facilis
            eligendi neque nemo hic in ipsam eaque sunt quia quisquam cupiditate
            tempore blanditiis quasi possimus. Blanditiis minus, voluptatibus
            delectus quo eveniet debitis quidem enim. Repellendus impedit
            ratione assumenda at sequi. Aperiam dicta repellendus quaerat
            consequatur.
          </p>
        </div>
        <div className="hidden lg:flex "></div>
      </div>
      <Journey />
    </>
  );
}
