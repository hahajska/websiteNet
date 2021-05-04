import React from "react";
import "./styles/HomeButton.scss";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function HomeButton() {
  return (
    <Link className="wrapperHomeButton flex justify-center items-center" to="/">
      <h1 className="pb-1">
        <AiOutlineHome />
      </h1>
    </Link>
  );
}
