import React from "react";
import styles from "@/styles/Pages/Services.module.css";
import greyTexture from "public/grey_texture.jpeg";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Services() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${greyTexture.src})`,
          width: "100%",
          backgroundSize: "100% 400px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
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
      <div className={styles.container}>
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
      </div>
      <div className={styles.container}>
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
      </div>
    </>
  );
}
