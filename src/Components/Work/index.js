import React from "react";
import "./styles/_Work.scss";
import WorkItem from "./WorkItem";

export default function Work() {
  return (
    <section className="lg:container lg:mx-auto pt-30">
      <div className="grid grid-cols-1">
        <div className="nadpisWork  justify-center py-10  text-center  lg:flex lg:items-center lg:justify-center lg:py-12">
          <h1>My Projects</h1>
        </div>
      </div>
      <WorkItem />
      <WorkItem />
    </section>
  );
}
