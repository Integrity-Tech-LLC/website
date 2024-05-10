import React, { useState, useEffect } from "react";
import styles from "@/styles/Pages/OurWork.module.css";
import Image from "next/image";
import Link from "next/link";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function OurWorkApps() {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current) {
      setTimeout(() => {
        if (current === 1) {
          setCurrent(2);
        } else if (current === 2) {
          setCurrent(3);
        } else if (current === 3) {
          setCurrent(1);
        }
      }, 8000);
    }
  }, [current]);
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>Custom Websites and Apps!</h2>
          <p className={styles.bannerText}>
            Whatever it is you need, we can build it. Check out some of our work
            below. What we did for our previous and current clients, we can also
            do for you!
          </p>
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.bodyapps}
        style={{ verticalAlign: "top" }}>
        <h2 className={styles.header}>Custom Applications</h2>
        <div className={styles.text}>
          <Image
            src="/WeClean.png"
            alt="weclean"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <div style={{ textAlign: "center", width: "100%" }}>
            <b>WeClean SaaS App</b>
          </div>
          <br />
          <p>
            WeCleanLocal has a dream to help the cleaning industry automate and
            manage many of their organizational tasks. The WeClean SaaS App has
            a built in POS system, a user account creation feature, online
            booking, scheduling, and assigning. It even stores billing history
            and automatically calculates cost of bookings based on preset user
            settings. There's also a marketing tool where users can create
            electronic coupons and gift cards on the fly. It also handles many
            of the nuances that are associated with these tasks, allowing
            cleaners to focus on what they do best.
          </p>
          <br />
          <div className={styles.link}>
            <Link href={`/ourwork/weclean`}>
              <span>See Full Project Summary</span>{" "}
              <AiOutlineArrowRight size={10} />
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.bodywebsites}>
        <h2 className={styles.header}>Custom Websites</h2>

        <div className={styles.textwebsites} style={{ textAlign: "center" }}>
          {current === 1 ? (
            <>
              <div style={{ textAlign: "center", width: "100%" }}>
                <b>Kompletion.net</b>
                <br />
                <br />
              </div>
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
            </>
          ) : current === 2 ? (
            <>
              <div style={{ textAlign: "center", width: "100%" }}>
                <b>Ellie B's (Work In Progress)</b>
                <br />
                <br />
              </div>
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
            </>
          ) : (
            <>
              <div style={{ textAlign: "center", width: "100%" }}>
                <b>True Blue (Work In Progress)</b>
                <br />
                <br />
              </div>
              <Image
                src="/trueblue.jpg"
                alt="trueblue"
                width={300}
                height={600}
                className={styles.imgdesktop}
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
            </>
          )}
        </div>
      </AnimationOnScroll>
    </>
  );
}
