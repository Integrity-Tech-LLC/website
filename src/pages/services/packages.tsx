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
            <br /> Note: There may be additional fees associated with third
            party services such as web hosting and domain registration. These
            are not included in the package price, but will be discussed with
            you before any agreements are made.
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
          <li>Google workspace set up</li>
          <li>
            Google business registeration (note: must have a physical location)
          </li>
          <li>Business Gmail set up</li>
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
            (see some{" "}
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
            E-commerce integration (Example: Shopify or BigCommerce integration)
          </li>
          <li>Fully customizable website with up to 30 pages</li>
          <li>Total of 15 employee logins</li>
          <li>
            Total of 10 additional custom integrations of your choosing (see
            some{" "}
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
            If you need something more then what these packages offer, you might
            want to consider a custom application rather then a website.{" "}
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
