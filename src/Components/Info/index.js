import React from "react";
import "./styles/_Info.scss";
import LongImage from "../../images/LongImage.jpg";

export default function Info() {
  return (
    <section className="infoSection lg:container lg:mx-auto grid grid-cols-6">
      <div className="cara "></div>
      <div className="grid lg:col-span-4 col-span-6 grid-rows-2 ">
        <div className="textAbout md:px-12 flex justify-start md:pt-24 px-5 py-12 lg:items-end items-center flex-col text-justify">
          <h1>Something About Me</h1>
          <p className="lg:pl-56 pl-0 px:12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            explicabo quia fugiat eos sunt tempora quod nam, laboriosam, nulla
            nisi debitis. Asperiores reiciendis facilis nesciunt aliquam, non
            libero temporibus! Qui consequuntur amet soluta eaque culpa in
            excepturi quia iste ex. Consequuntur, harum deserunt quaerat
            voluptatibus aperiam nemo sed hic omnis!
          </p>
        </div>
        <div className="md:px-12 flex justify-start md:pt-24 px-5 py-12 lg:items-end items-center flex-col text-justify textAbout">
          <h1>Work With Me</h1>

          <p className="lg:pl-56">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            explicabo quia fugiat eos tempora quod nam, laboriosam, nulla nisi
            debitis. Asperiores reiciendis facilis nesciunt aliquam, non libero
            temporibus! Qui consequuntur amet soluta eaque culpa in excepturi
            quia iste ex. Consequuntur, harum deserunt quaerat voluptatibus
            aperiam nemo sed hic omnis!
          </p>
          <button className="mt-6">Contact Me</button>
        </div>
      </div>
      <div className="longImage hidden lg:flex lg:col-span-2 items-center justify-center px-12">
        <img src={LongImage} alt="imagos" loading="lazy" />
      </div>
    </section>
  );
}
