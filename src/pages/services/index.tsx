import React from "react";
import styles from "@/styles/Pages/Services.module.css";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Services() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>Consider Us Your Key</h2>
          <p className={styles.bannerText}>
            Technology can be daunting, but unlocking its potential can be a
            game changer for your business. Consider Integrity Tech your key.
            Throughout our experience we have learned how much untapped
            potential there is in software. Very few people understand what you
            can truly achieve. We are here to help you gain access to the great
            unknown.
          </p>
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>
          Fully Customized and Professional Websites
        </h2>
        <p className={styles.text}>
          We offer a fully transparent model. We package our website building
          services in fully explained bundles and packages with a flat rate so
          you know exactly what you are getting and what you are paying. We can
          then add any customization you want as extra features. There's nothing
          more frustrating than having to invest your time to get information.
          Skip the line with Integrity Tech.
          <div className={styles.link}>
            <Link href={`/services/packages`}>
              Website Packages <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.container}>
        <h2 className={styles.header}>Custom Web and Mobile Apps</h2>
        <p className={styles.text}>
          With all the software products out there you would think there would
          be enough to meet every need your business has. However most mass
          produced software misses the mark in more than one way. Why not create
          something that is truly yours and tailor made for you? Talk to us! You
          might be surprised what we can build for you.
          <div className={styles.link}>
            <Link href={`/contact`}>
              Contact Us <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.container100}>
        <h2 className={styles.header}>Website and App Servicing</h2>
        <p className={styles.text}>
          Do you already have a website or application but there's a persistant
          issue with it that you can't seem to solve on your own? Reach out to
          me! I'll have that issue resolved for you before you can blink.
          <div className={styles.link}>
            <Link href={`/contact`}>
              Contact Us <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </p>
      </AnimationOnScroll>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
