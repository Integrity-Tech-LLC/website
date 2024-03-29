import React from "react";
import styles from "@/styles/Pages/Services.module.css";

export default function Maintenance() {
  return (
    <>
      <div>
        <div className={styles.banner}>
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
      <div className={styles.container}>
        <h2 className={styles.header}>Bare-bones Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$50/month</li>
          <li>Free website monitoring</li>
          <li>Free basic hosting</li>
          <li>Free domain registration</li>
          <li>Free SSL</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Basic Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$200/month</li>
          <li>Free website monitoring</li>
          <li>Free basic hosting</li>
          <li>Free domain registration</li>
          <li>Free SSL</li>
          <li>Up to 2 email addresses on your Google Workspace account</li>
          <li>Up to 1 free service hour per month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Moderate Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$400/month</li>
          <li>Includes everything from Basic Upkeep</li>
          <li>Up to 5 email addresses on your Google Workspace account</li>
          <li>Up to 3 free service hours per month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Consistent Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$750/month</li>
          <li>Includes Basic Upkeep and Moderate Upkeep</li>
          <li>Free Premium hosting</li>
          <li>Free Database hosting</li>
          <li>Up to 10 email addresses on your Google Workspace account</li>
          <li>Up to 5 free service hours per month</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Full-Time Upkeep</h2>
        <ul className={styles.text}>
          <li className={styles.priceMonth}>$1000/month</li>
          <li>Includes Basic Upkeep, Moderate Upkeep and Consistent Upkeep</li>
          <li>Up to 15 email addresses on your Google Workspace account</li>
          <li>Up to 8 free service hours per month</li>
        </ul>
      </div>
    </>
  );
}
