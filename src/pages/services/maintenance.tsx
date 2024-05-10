import React from "react";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "@/styles/Pages/Services.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Maintenance() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>Maintenance Packages</h2>
          <p className={styles.bannerText}>
            All custom websites are required to have a monthly maintenance plan.
            This is designed to easily cover monthly hosting costs and services
            as well as offer a flexible and predictable way for you to manage
            the cost of keeping your website up to date.
            <br />
            <br />
            Note: All costs associated with additional third-party integrations
            not listed in the agreed upon package are charged per service. All
            additional maintenance service hours outside of the agreed upon plan
            are charged at $200 an hour.
          </p>
        </div>
      </div>
      <br />
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Bare-bones Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$50/month</li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free website monitoring
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free basic hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free SSL
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.container}
        style={{ marginTop: "-23px" }}>
        <h2 className={styles.mostPopular}>Best Value</h2>
        <h2 style={{ backgroundColor: "green" }} className={styles.header}>
          Basic Upkeep
        </h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$200/month</li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free website monitoring
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free basic hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free SSL
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free email addresses (up to 2)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free service hours (1 a month)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Moderate Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$400/month</li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free website monitoring
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free premium hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free SSL
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free email addresses (up to 5)
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free service hours (up to 3 a month)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.container}>
        <h2 className={styles.header}>Consistent Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$750/month</li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free website monitoring
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free premium hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free SSL
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free email addresses (up to 10)
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free service hours (up to 5 a month)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Full-Time Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$1000/month</li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free website monitoring
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free premium hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free SSL
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free email addresses (up to 15)
          </li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Free service hours (up to 8 a month)
          </li>
        </ul>
      </AnimationOnScroll>
    </>
  );
}
