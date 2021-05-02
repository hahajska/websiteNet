import React from "react";
import "./styles/NavbarButton.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LiItemAnimace1 = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: 2,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const LiItemAnimace2 = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: 2.25,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const LiItemAnimace3 = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: 2.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const LiItemAnimace4 = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: 2.75,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function LiItems() {
  return (
    <>
      <div className="menuList flex justify-center items-center text-center">
        <ul>
          <motion.li variants={LiItemAnimace1} initial="hidden" animate="show">
            Home
          </motion.li>
          <motion.li>
            <motion.li
              variants={LiItemAnimace2}
              initial="hidden"
              animate="show"
            >
              <Link to="/MoreInfo">About </Link>
            </motion.li>
          </motion.li>
          <motion.li variants={LiItemAnimace3} initial="hidden" animate="show">
            Works
          </motion.li>
          <motion.li variants={LiItemAnimace4} initial="hidden" animate="show">
            Contacts
          </motion.li>
        </ul>
        <div className="box"></div>
      </div>
      {/* bug here */}
      {/* bug here */}
      {/* bug here */}
      {/* bug here */}
      {/* bug here */}
      {/* bug here */}
      {/* bug here */}
      <motion.div className="backgroundDiv"></motion.div>
    </>
  );
}
