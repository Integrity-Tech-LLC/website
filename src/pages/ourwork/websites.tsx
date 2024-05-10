import React from "react";
import styles from "@/styles/Pages/OurWork.module.css";
import Image from "next/image";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function OurWorkApps() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>
            Beautiful Custom Made Websites!
          </h2>
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.bodywebsites}>
        <h2 className={styles.header}>Kompletion.net</h2>
        <div className={styles.text}>
          <Image
            src="/kompletion.jpg"
            alt="kompletion"
            width={300}
            height={600}
            className={styles.imgwork}
            priority
          />
          <br />
          <br />
          <div className={styles.link}>
            <a href="https://www.kompletion.net">
              <span>See Kompletion's Website</span>{" "}
              <AiOutlineArrowRight size={10} />
            </a>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.bodywebsites}>
        <h2 className={styles.header}>Ellie B's (Work In Progress)</h2>
        <div className={styles.text}>
          <Image
            src="/elliebs.jpg"
            alt="elliebs"
            width={300}
            height={600}
            className={styles.imgwork}
            priority
          />
          <br />
          <br />
          <div className={styles.link}>
            <a href="https://ellie-bs-8976d03d5862.herokuapp.com/">
              <span>See Ellieb's Website</span>{" "}
              <AiOutlineArrowRight size={10} />
            </a>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.bodywebsites}>
        <h2 className={styles.header}>True Blue (Work In Progress)</h2>
        <div className={styles.text}>
          <Image
            src="/trueblue.jpg"
            alt="trueblue"
            width={300}
            height={600}
            className={styles.imgwork}
            priority
          />
          <br />
          <br />
          <div className={styles.link}>
            <a href="https://true-blue-living-7b93d0a0df8a.herokuapp.com/">
              <span>See True Blue's Website</span>{" "}
              <AiOutlineArrowRight size={10} />
            </a>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}
