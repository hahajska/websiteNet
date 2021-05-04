import React from "react";
import "./styles/CurrentInfo.scss";
import DlouhyImage from "../../../images/Mountains.jpg";

export default function CurrentInfo() {
  return (
    <>
      <div className="oneImageContainer  p-0 flex justify-start items-center">
        <img src={DlouhyImage} alt="obrazek" className="dlouhyImage" />
      </div>
      <div className="imageInfoContainer  flex justify-start items-center flex-col">
        <h1 className="pt-24">About me</h1>
        <p>Scroll Down</p>
      </div>
    </>
  );
}
