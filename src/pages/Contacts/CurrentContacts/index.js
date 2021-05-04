import React from "react";
import "./styles/CurrentContacts.scss";
import DlouhyImage from "../../../images/Mountains.jpg";

export default function CurrentContacts() {
  return (
    <>
      <div className="oneContactsContainer  p-0 flex justify-start items-center">
        <img src={DlouhyImage} alt="obrazek" className="dlouhyImage" />
      </div>
      <div className="contactsInfoContainer  flex justify-start items-center flex-col">
        <h1 className="pt-24">Contacts</h1>
        <p>Scroll Down</p>
      </div>
    </>
  );
}
