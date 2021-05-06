import React from "react";
import "./styles/Journey.scss";
import MountainsVideo from "../../../../images/MountainsVideo.mp4";

const JourneyData = [
  {
    id: 1,
    title: "I learnt HTML",
    date: "2018/02 - 2018/03",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, enim soluta voluptatum vel optio assumenda? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis distinctio vitae in?",
  },
  {
    id: 2,
    title: "I learnt CSS",
    date: "2018/03 - 2018/05",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, enim soluta voluptatum vel optio assumenda? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis distinctio vitae in?",
  },
  {
    id: 3,
    title: "I learnt Bootstrap",
    date: "2018/07 - 2018/09",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, enim soluta voluptatum vel optio assumenda? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis distinctio vitae in?",
  },
];

export default function Journey() {
  return (
    <div className="journeyDiv lg:container lg:mx-auto grid  xl:grid-cols-2  grid-cols-1 ">
      <div className="flex justify-center items-center ">
        <video
          src={MountainsVideo}
          autoPlay
          muted
          loop
          loading="lazy"
          className="videoMountains"
        ></video>
      </div>

      <div className="px-8 py-24 flex justify-center items-center flex-col">
        {JourneyData.map((item, id) => {
          return (
            <div key={id} className="journeyItem xl:py-24 py-8 text-center">
              <h2 className="nadpis">{item.title}</h2>
              <h4 className="datum">{item.date}</h4>
              <p className="journeyText xl:pr-40 lg:pr-20 pr-6 text-justify">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
