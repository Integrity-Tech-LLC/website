import React from "react";
import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "@/styles/Pages/OurWork.module.css";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Integrations() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <br />
          <br />
          <h2 className={styles.bannerHeader}>Need some inspiration?</h2>
          <p className={styles.bannerText}>
            Below is a list of common integrations that are used in many
            different business websites. We are able to incorporate any of these
            features into your custom website.
          </p>
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn={animations.fadeInUp}
        className={styles.body}>
        <h2 className={styles.header}>Suggested Integrations</h2>
        <div className={styles.text}>
          <ul>
            <li>
              Payment portals and gateways using Paypal, Stripe or Square.
            </li>
            <li>
              CRM integrations via sources like salesforce, hubspot or Zoho CRM
              among others.
            </li>
            <li>Social media widgets via Facebook or Linkedin among others.</li>
            <li>Google Maps widgets so people can more easily find you.</li>
            <li>
              Calendly widget so people can set appointments straight from your
              website.
            </li>
            <li>
              Ecommerce integrations with Shopify, Bigcommerce or Etsy to allow
              people to see certain products and sales from your website.
            </li>
            <li>Chat window via Zendesk, Intercom or Drift among others.</li>
            <li>File upload and storage from your website.</li>
            <li>PDF conversion and downloading from your website.</li>
            <li>Accounting integrations via Quickbooks among others.</li>
            <li>
              Shipping and Tracking portals and widgets via UPS, Fedex, etc.
            </li>
            <li>Video hosting and streaming.</li>
            <li>
              Electronic form signing from your website via DocuSign or Adobe.
            </li>
            <li>Survey tools via SurveyMonkey among others.</li>
            <li>
              Anything else you can imagine. Have an idea? Talk to me, we can do
              a lot!
            </li>
          </ul>
          <br />
          <div className={styles.link}>
            <Link href={`/services/packages`}>
              <span>Back to Packages</span> <AiOutlineArrowRight size={10} />
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}
