import React from "react";
import styles from "@/styles/Pages/OurWork.module.css";
import Image from "next/image";
import Link from "next/link";
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
          <h2 className={styles.bannerHeader}>100% custom built solutions!</h2>
          <p className={styles.bannerText}>
            Here are some examples of powerful software tools we've built for
            others, and we can do the same for you! There is no problem too
            complex for us, and no dream that we can't help you achieve.
          </p>
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.body}>
        <h2 className={styles.header}>WeClean SaaS App</h2>
        <div className={styles.text}>
          <Image
            src="/WeClean.png"
            alt="weclean"
            width={80}
            height={80}
            className={styles.img}
            priority
          />

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
    </>
  );
}
