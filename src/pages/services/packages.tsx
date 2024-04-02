import React from "react";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "@/styles/Pages/Services.module.css";
import Link from "next/link";

export default function Packages() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>Website Packages</h2>
          <p className={styles.bannerText}>
            We offer a unique model where we create services in bundles and
            price them at a fixed rate. We never use third-party platforms like
            Wordpress to build your site. We build everything from the ground
            up. This has many benefits, including complete control over your
            site as well as unmatched loading speed. Look no further than our
            own website for an example. Fast load times can greatly improve user
            experience as well as give you a huge SEO advantage.
            <br />
            <br /> All custom websites are required to have a{" "}
            <Link href={`/services/maintenance`}>
              <span className={styles.hyperlinkwhite}>
                monthly maintenance plan.
              </span>
            </Link>{" "}
            We have many flexible options so you can pick the one that's right
            for you.
          </p>
        </div>
      </div>
      <AnimationOnScroll
        animateIn={animations.fadeInLeft}
        className={styles.container}>
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
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn={animations.fadeInRight}
        className={styles.container}>
        <h2 className={styles.header}>Business Grower</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$7,500</li>
          <li>Includes everything from Business Starter</li>
          <li>Fully customizable website with up to 15 pages</li>
          <li>Login portal, includes up to 5 logins</li>
          <li>Basic CMS (ability to update body text on pages)</li>
          <li>Calendly integration</li>
          <li>Google Maps integration</li>
          <li>Database implementation</li>
          <li>
            Up to 3 custom integrations and features of your choosing (see{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                suggested integrations here
              </span>
            </Link>{" "}
            if you need some inspiration.)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Business Rocket</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$15,000</li>
          <li>Includes everything from Business Starter and Business Grower</li>
          <li>
            E-commerce integration (Example: Shopify, BigCommerce or Etsy
            integration)
          </li>
          <li>Fully customizable website with up to 30 pages</li>
          <li>Total of 15 logins</li>
          <li>Premium CMS (update text and photo galleries)</li>
          <li>
            Total of 5 custom integrations of your choosing (see{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                suggested integrations here
              </span>
            </Link>{" "}
            if you need some inspiration.)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn={animations.fadeInRight}
        className={styles.container}>
        <h2 className={styles.header}>E-Commerce Rocket</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$35,000</li>
          <li>
            Includes Business Starter, Business Grower, and Business Rocket
          </li>
          <li>Custom built E-Commerce store that is truly your own</li>
          <li>Completely 100% customized and branded to your requirements</li>
          <li>
            Complete CMS (update products, create promotions and gift cards,
            edit content and photos)
          </li>
          <li>Stripe, Square, or Paypal integration</li>
          <li>Integration with Mailchimp</li>
          <li style={{ listStyleType: "none" }}>
            <br />
            Unlike mass produced E-Commerce platforms we never charge additional
            per sale. Your sales are your greatest asset; build your E-Commerce
            site with us and claim back your profits.
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn={animations.fadeInLeft}
        className={styles.container}>
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
      </AnimationOnScroll>
    </>
  );
}
