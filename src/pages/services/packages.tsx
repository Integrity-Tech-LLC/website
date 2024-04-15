import React from "react";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "@/styles/Pages/Services.module.css";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

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
      <br />
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Business Starter</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$2,500</li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Fully customizable website with up to 7 pages
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Complete Google ReCaptcha protection
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Contact form
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Mobile responsiveness
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Website hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google workspace set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google Maps integration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google business registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Business Gmail set-up
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.container}
        style={{ marginTop: "-23px" }}>
        <h2 className={styles.mostPopular}>Most Popular</h2>
        <h2 style={{ backgroundColor: "green" }} className={styles.header}>
          Business Grower
        </h2>
        <ul className={styles.text}>
          <li className={styles.price}>$7,500</li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Fully customizable website with up to 15 pages
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Complete Google ReCaptcha protection
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Contact form
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Mobile responsiveness
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Website hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google workspace set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google Maps integration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google business registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Business Gmail set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Login portal (up to 5 accounts)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            CMS (basic: edit text)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Database implementation
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Custom integrations (up to 3,{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                example integrations here
              </span>
            </Link>{" "}
            )
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInLeft}
        className={styles.container}>
        <h2 className={styles.header}>Business Rocket</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$15,000</li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Fully customizable website with up to 30 pages
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Complete Google ReCaptcha protection
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Contact form
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Mobile responsiveness
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Website hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google workspace set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google Maps integration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google business registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Business Gmail set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Login portal (up to 15 accounts)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            CMS (premium: edit text and photo galleries)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Database implementation
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Custom integrations (up to 5,{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                example integrations here
              </span>
            </Link>{" "}
            )
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            E-commerce integration (connect your Shopify, BigCommerce, or Etsy
            account)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInRight}
        className={styles.container}>
        <h2 className={styles.header}>E-Commerce Rocket</h2>
        <ul className={styles.text}>
          <li className={styles.price}>$35,000</li>
          <li>
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Fully customizable website with up to 50 pages
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Complete Google ReCaptcha protection
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Contact form
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Mobile responsiveness
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Domain registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Website hosting
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google workspace set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google Maps integration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Google business registration
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Business Gmail set-up
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Login portal (unlimited accounts)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            CMS (complete: update products, create promotions and gift cards,
            edit content and photos)
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Database implementation
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            Custom integrations (up to 5,{" "}
            <Link href={`/services/integrations`}>
              <span className={styles.hyperlink}>
                example integrations here
              </span>
            </Link>{" "}
            )
          </li>
          <li>
            {" "}
            <IoCheckmarkCircle
              size={20}
              style={{ color: "green", paddingTop: 6 }}
            />
            E-commerce (100% custom built to your requirements)
          </li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
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
