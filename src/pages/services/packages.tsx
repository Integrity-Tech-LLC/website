import React from "react";
import styles from "@/styles/Pages/Services.module.css";
import smartphone from "public/smartphone.jpg";
import Link from "next/link";

export default function Packages() {
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
          <h2 className={styles.bannerHeader}>Website Packages</h2>
          <p className={styles.bannerText}>
            We offer a unique model where we create services in bundles and
            price them at a fixed rate. This will save you a consultation call
            and is meant to mimic the feeling of shopping in the supermarket. We
            can then add any additional features or customization to your plan
            as extras.
            <br />
            <br />
            We never use third party platforms like Wordpress to build your
            site. We build everything from the ground up. This is designed to
            allow you to have even further control over your site and further
            reduces overhead so we can pass the savings onto you. If you want an
            idea of how much control you can have, check out{" "}
            <Link href={`/game`}>
              <span className={styles.hyperlinkwhite}>Logo Attack</span>
            </Link>{" "}
            . It's a game we built on our own website to demonstrate the level
            of customization we can offer.
            <br />
            <br /> All custom websites are required to have a{" "}
            <Link href={`/services/maintenance`}>
              <span className={styles.hyperlinkwhite}>
                monthly maintenance plan
              </span>
            </Link>{" "}
            . We have many flexable options so you can pick the one that's right
            for you.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Business Starter</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$2,500</li>
          <li>Fully customizable website with up to 7 pages</li>
          <li>Complete Google ReCaptcha protection</li>
          <li>
            Contact form for your customers to send you an email straight from
            your site
          </li>
          <li>Mobile responsiveness</li>
          <li>Domain registration</li>
          <li>Website hosting</li>
          <li>Google workspace set-up</li>
          <li>Google business registration</li>
          <li>Business Gmail set-up</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Business Grower</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$5,000</li>
          <li>Includes everything from Business Starter</li>
          <li>Fully customizable website with up to 15 pages</li>
          <li>
            Login portal for internal use, includes up to 5 employee logins
          </li>
          <li>Calendly integration</li>
          <li>Google Maps integration</li>
          <li>Database implementation</li>
          <li>
            Up to 3 additional custom integrations and features of your choosing
            (see{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                suggested integrations here
              </span>
            </Link>{" "}
            if you need some inspiration.)
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Business Rocket</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$10,000</li>
          <li>Includes everything from Business Starter and Business Grower</li>
          <li>
            E-commerce integration (Example: Shopify, BigCommerce or Etsy
            integration)
          </li>
          <li>Fully customizable website with up to 30 pages</li>
          <li>Total of 15 employee logins</li>
          <li>
            Total of 10 additional custom integrations of your choosing (see{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                suggested integrations here
              </span>
            </Link>{" "}
            if you need some inspiration.)
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Custom Application</h2>
        <ul className={styles.text}>
          <li className={styles.price}>Varies</li>
          <li>
            If you need something more than what these packages offer, you might
            want to consider a custom application rather than a website.{" "}
            <Link href={`/contact`}>
              <span className={styles.hyperlink}>Contact us </span>
            </Link>
            to schedule a free consultation.
          </li>
        </ul>
      </div>
    </>
  );
}
