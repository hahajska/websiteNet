import React from "react";
import "./styles/_Footer.scss";
import { Link } from "react-router-dom";

const FooterData = [
  { id: 1, data: "Github" },
  { id: 2, data: "tomasschlogl@email.cz" },
  { id: 3, data: "Linkedin" },
  { id: 4, data: "Czech Republic" },
  { id: 5, data: "Copyright 2021. All Rights Reserved." },
  { id: 6, data: "Instagram" },
  { id: 7, data: "Facebook" },
  { id: 8, data: "Back To Top" },
];

export default function Footer() {
  return (
    <section className="sectionFooter lg:container lg:mx-auto">
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-36">
        {FooterData.map((item) => {
          return (
            <div className="listData flex justify-center items-center md:p-0 py-4 px-2 text-center">
              <p>{item.data}</p>
            </div>
          );
        })}
      </div>
      <div className="bigFooterText text-center">
        <h1>GET IN TOUCH</h1>
        <h2>WITH ME</h2>
      </div>
    </section>
  );
}
{
  /* <div className="footerInfo flex items-center justify-center">
<h1>This page is under construction!</h1>
</div>

<div className="leftLinksDiv flex justify-center order-first lg:order-2">
<div className="fastLinks py-12 text-center">
  <ul>
    <li>Home</li>
    <li>
      <Link to="/MoreInfo">More Info</Link>
    </li>
    <li>Works</li>
    <li>Contacts</li>
    <li>
      <Link to="/About">About</Link>
    </li>
  </ul>
</div>
</div> */
}
