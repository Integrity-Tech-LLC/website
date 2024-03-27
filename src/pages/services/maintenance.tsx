import React from "react";
import styles from "@/styles/Pages/Services.module.css";
import smartphone from "public/smartphone.jpg";
import Link from "next/link";

export default function Maintenance() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${smartphone.src})`,
          width: "100%",
          backgroundSize: "100% 400px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>Maintenance Packages</h2>
          <p className={styles.bannerText}>
            All custom websites are required to have a monthly maintenance plan.
            This is designed to easily cover monthly hosting costs and services
            as well as offer a flexible and predictable way for you to manage
            the cost of keeping your website up to date.
            <br />
            <br />
            Note: All costs assocated with additional 3rd party integrations not
            listed in the agreed upon package are charged per cost of service.
            All additional maintenance service hours outside of the agreed upon
            plan are charged at $200 an hour.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Basic Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$100 a month</li>
          <li>Free basic hosting</li>
          <li>Free domain registeration</li>
          <li>Free SSL</li>
          <li>Up to 2 email addresses on your Google Workspace Account</li>
          <li>Up to 1 free service hour a month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Moderate Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$200 a month</li>
          <li>Includes everything from Basic Upkeep</li>
          <li>Up to 5 email addresses on your Google Workspace Account</li>
          <li>Up to 3 free service hours a month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Consistant Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$500 a month</li>
          <li>Includes Basic Upkeep and Moderate Upkeep</li>
          <li>Free Premium Hosting</li>
          <li>Free Database hosting</li>
          <li>Up to 10 email addresses on your Google Workspace Account</li>
          <li>Up to 5 free service hours a month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Full-Time Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$1000 a month</li>
          <li>Includes Basic Upkeep, Moderate Upkeep and Consistant Upkeep</li>
          <li>Up to 25 email addresses on your Google Workspace Account</li>
          <li>Up to 12 free service hours a month</li>
        </ul>
      </div>
    </>
  );
}
