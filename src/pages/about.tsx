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
          <h2 className={styles.bannerHeader}>Meet The Team!</h2>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Christopher Neisen</h2>
        <div className={styles.text}>
          <Image
            src="/chris.jpeg"
            alt="Chris"
            width={100}
            height={100}
            className={styles.img}
            priority
          />
          <p>
            My name is Chris and I founded Integrity Tech to help equip small
            business owners to be able to have a fair shot in an ever-growing
            technology-driven society. It's time to level the playing field and
            help people get the tools they need to properly compete.
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
            companies. However, working for many of these companies allowed me
            very little opportunity to truly help, so I decided to venture out
            on my own.
            <br />
            <br />
            There is such a large amount of missed potential simply due to a
            lack of knowledge. It is the primary reason Integrity Tech exists.{" "}
            <br />
            <br />
            By choosing Integrity Tech we will go above and beyond to ensure a
            bridge is built between you and the software you need.
          </p>
          <br />
          <div className={styles.link}>--Founder and Software Engineer</div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Megan Neisen</h2>
        <div className={styles.text}>
          <Image
            src="/megan.png"
            alt="Megan"
            width={100}
            height={100}
            className={styles.img}
            priority
          />
          <p>
            I'm Megan. I enjoy working behind in the scenes helping with more of
            the administrative tasks.
            <br />
            <br />
            In my spare time I like to read, write, and create art in my
            sketchbook. During the summer I love being outside and I enjoy
            riding my bike.
            <br />
            <br />
          </p>
          <br />
          <div className={styles.link}>--Bookkeeper and Content Editor</div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Cooper</h2>
        <div className={styles.text}>
          <Image
            src="/cooper.jpg"
            alt="Cooper"
            width={100}
            height={100}
            className={styles.img}
            priority
          />
          <p>
            I'm Cooper! They call me the office mascot but everyone knows I'm in
            charge around here. I like to chase small rodents and red flashy
            lights. I also like to run everywhere, in every direction, for
            absolutely no reason. I'm not always full of energy though.
            Sometimes I'd rather stare up at the ceiling and sit very still for
            hours. I enjoy cat treats, like I really really enjoy cat treats.
            Everyone loves me and I brighten everyone's day.
          </p>
          <br />
          <div className={styles.link}>--Office Mascot</div>
        </div>
      </div>
    </>
  );
}
