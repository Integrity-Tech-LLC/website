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
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>About The Founder</h2>
        </div>
      </div>
      <div className={styles.body}>
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
            to reach them. Throughout my career I have noticed how much unlocked
            potential there is in technology, and how few people there are who
            have access. I decided to start my business to help empower others
            by being their key to technology.
            <br />
            <br />I chose the name "Integrity" because that's what I want my
            entire business to be founded on. When I take on clients, I partner
            with them to see their dreams come to fruition. Nothing brings me
            more joy than seeing the excitement on someone's face when they
            realize what can truly be done with software, and the fact that I
            can help get them there.
            <br />
            <br />
            I have always found the most joy in helping others achieve their
            goals. Since I've started my career I've worked for a number of
            companies. However working for many of these companies allowed me
            very little opportunity to truly help, so I decided to venture out
            on my own.
            <br />
            <br />
            There is such a large amount of missed potential simply due to a
            lack of knowledge. I feel a need to help solve this problem. As I
            mentioned, my passion lies in helping people. It is the primary
            reason Integrity Tech exists. <br />
            <br />
            By choosing Integrity Tech we will go above and beyond to ensure a
            bridge is built between you and the software you need.
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
