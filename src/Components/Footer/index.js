import React from "react";
import "./styles/_Footer.scss";
//import { Link } from "react-router-dom";
import { BiUpArrowAlt } from "react-icons/bi";

const scrollTopFunkce = () => {
  window.scrollTo(0, 0);
};

export default function Footer() {
  return (
    <section className="sectionFooter mt-72 lg:container lg:mx-auto">
      <div className="flex lg:justify-start justify-center items-center nadpisFooter col-span-2 lg:col-span-1 border-b-2  border-gray-400">
        {/*         <h2>Get in touch with me</h2> */}
      </div>
      <div className=" infoFooter grid  grid-cols-1 lg:grid-cols-2">
        <div className="md:text-justify text-center flex justify-center items-center linksFooter">
          <ul>
            <li>Github</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="flex text-center justify-center items-center flex-col  pb-16 lg:pb-0">
          <p className="xl:px-32 lg:px:24 px-16">
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam minima eius quisquam iste delectus debitis! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Beatae, necessitatibus?
            "
          </p>
          <button className="mt-12" onClick={scrollTopFunkce}>
            <BiUpArrowAlt />
          </button>
        </div>
      </div>
    </section>
  );
}
