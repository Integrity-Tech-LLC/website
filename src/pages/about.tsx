import React from "react";
import styles from "@/styles/Pages/AboutUs.module.css";
import team from "public/meetteambackground.jpeg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${team.src})`,
          width: "100%",
          backgroundSize: "100% 550px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.descriptionBlue}>
          <h2 className={styles.headerBlue}>About The Founder</h2>
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.header}>Christopher Neisen</h2>
        <div className={styles.text}>
          <Image
            src="/chris.jpeg"
            alt="Chris"
            width={80}
            height={80}
            className={styles.img}
            priority
          />

          <p>
            Hi! My name is Chris and I founded Integrity Tech to help people
            bridge the gap between their dreams and the technologies they need
            to reach them. I have a true passion to help people and it's the
            driving force behind not just my business, but my entire way of
            life.
            <br />
            <br />I chose the name "Integrity" because that's what I want my
            entire business to be founded on. When I take on clients, I partner
            with them to see their dreams come to fruition. Nothing brings me
            more joy than seeing the excitement on someone's face when they
            realize their dreams are not so out of reach as they thought, and
            the fact that I can help get them there.
            <br />
            <br />
            In 2020, I graduated from Emerging Digital Academy as a part of
            their very first class. Since then I've worked for a number of
            companies and have always been trusted with high levels of
            responsibility and have never failed to produce.
            <br />
            <br />
            Over the course of a few years I decided to start Integrity Tech
            because while I love what I do, there has always been something
            missing within my soul. I always felt like I was working to build
            another's empire. While empires are all fine and dandy, I want to
            use my skill for something more than just lining my own pockets, not
            to mention the pockets of another. As I mentioned, my passion lays
            in helping people. It is the primary reason I chose this career
            path. <br />
            <br />
            The fact of the matter is that I truly genuinely care and if you
            choose Integrity Tech, my heart will be just as invested in your
            dream. By founding Integrity Tech, I'm able to achieve my dream by
            helping you achieve yours.
          </p>
          <br />
          <div className={styles.link}>
            --Founder and Lead Software Engineer
          </div>
        </div>
      </div>
    </>
  );
}
