import React, { useRef, useEffect } from "react";
//images
import Hory from "../../../images/Mountains.jpg";
//animations
import { gsap } from "gsap";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import { motion } from "framer-motion";
import { ZkouskaAnimace, item } from "../../../Components/Animations/MainAnim";
//styles
import "./styles/_Main.scss";

export default function Main() {
  gsap.registerPlugin(CSSRulePlugin);

  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  return (
    <section className="mainSection lg:container lg:mx-auto grid lg:grid-cols-6 md:grid-rows-1  ">
      <div className="leftImage lg:col-span-4 lg:order-first order-last flex lg:justify-center lg:items-center items-start">
        <div ref={(el) => (container = el)}>
          <>
            <div className="img-container text-center">
              <img
                ref={(el) => (image = el)}
                src={Hory}
                alt="img"
                loading="lazy"
              />
            </div>
          </>
        </div>
      </div>
      <div className="rightText lg:col-span-2 flex justify-start flex-column lg:items-center items-end lg:px-5 lg:py-2 px-5 ">
        <motion.div
          className="textBox px-2"
          variants={ZkouskaAnimace}
          animate="show"
          initial="hidden"
        >
          <motion.h1 variants={item}>Name Surname</motion.h1>
          <motion.span className="px-1" variants={item}>
            FE Developer
          </motion.span>
          <motion.p className="px-1 pr-5 pt-5 text-left" variants={item}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            doloremque dicta doloribus sunt iusto modi quisquam aut optio! Eum,
            ratione!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
