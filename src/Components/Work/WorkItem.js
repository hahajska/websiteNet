import React from "react";
import "./styles/_Work.scss";
import WorkBigImage from "../../images/BigImage.jpg";

export default function WorkItem() {
  return (
    <section className="workSection grid lg:grid-cols-6 md:grid-rows-1 gap-4">
      <div className="imageWork col-span-3 order-2 lg:order-1 p-5 flex xl:flex xl:justify-end xl:items-end  justify-center items-center">
        <img
          src={WorkBigImage}
          loading="lazy"
          className="hidden xl:flex smallImage"
          alt="img"
        />
        <img src={WorkBigImage} className="bigImage" alt="img" />
      </div>
      <div className="textWork col-span-3 px-8 xl:px-16 flex-col flex xl:justify-center xl:items-start items-center justify-center order-1 lg:order-2 ">
        <h1>Portfolio</h1>
        <span>22/04/2021</span>
        <p className="lg:pr-20 pt-4 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero
          eveniet in quam rerum voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis libero nemo dolorem natus a
          sequi debitis nesciunt expedita ipsa iste.
        </p>
      </div>
    </section>
  );
}
