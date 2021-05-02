import React, { useState } from "react";
import "./styles/NavbarButton.scss";
import { motion } from "framer-motion";
import LiItems from "./LiItems";
import { BsPlus } from "react-icons/bs";

export default function NavbarButton() {
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleOff = () => {
    setIsActive(!isActive);
  };

  const AnimaceButton = {
    hidden: {
      opacity: 1,
    },
    show: {
      rotate: 45,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  const AnimaceNavbar1 = {
    hidden: {
      x: 0,
      y: 0,
      transition: { duration: 1.35, ease: "easeInOut" },
    },
    show: {
      x: 0,
      y: "-110vh",
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };
  const AnimaceNavbar2 = {
    hidden: {
      x: 0,
      y: 0,
      transition: { duration: 1.35, ease: "easeInOut" },
    },
    show: {
      x: 0,
      y: "-110vh",
      transition: {
        delay: 0.45,
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };
  const AnimaceNavbar3 = {
    hidden: {
      x: 0,
      y: 0,
      transition: { duration: 1.35, ease: "easeInOut" },
    },
    show: {
      x: 0,
      y: "-110vh",
      transition: {
        delay: 0.9,
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="sectionNav">
      <motion.div
        className="navbarButton_Wrapper flex items-center justify-center"
        onClick={handleActive}
        animate={isActive ? "show" : "hidden"}
        variants={AnimaceButton}
        initial="hidden"
      >
        <h1>
          <BsPlus />
        </h1>
      </motion.div>
      <motion.div
        className="prechod1"
        variants={AnimaceNavbar1}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div>
      <motion.div
        className="prechod2"
        variants={AnimaceNavbar2}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div>
      <motion.div
        className="wrapperList grid  lg:grid-cols-2 "
        variants={AnimaceNavbar3}
        animate={isActive ? "show" : "hidden"}
        initial="hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LiItems handleOff={handleOff} />
      </motion.div>
    </section>
  );
}
