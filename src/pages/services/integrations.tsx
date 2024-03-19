import React from "react";
import styles from "@/styles/Pages/OurWork.module.css";
import brand from "public/brand.jpeg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Integrations() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${brand.src})`,
          width: "100%",
          backgroundSize: "100% 650px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>Need some inspiration?</h2>
          <p className={styles.bannerText}>
            You ever hear the phrase "you don't know what you don't know"? How
            can you make a decision when you don't know what is available to
            you? Let us help. Below is a list of common integrations that are
            used in many different business websites. Here at Integrity Tech we
            are able to incorperate any of these features into your custom
            application.
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <h2 className={styles.header}>Suggested Integrations</h2>
        <div className={styles.text}>
          <ul>
            <li>
              Payment portals and gateways using Paypal, Stripe, or Square.
            </li>
            <li>
              CRM integrations via sources like salesforce, hubspot, and Zoho
              CRM among others.
            </li>
            <li>
              Social media widgets via Facebook, Twitter and Linkedin among
              others.
            </li>
            <li>Google Maps widgets so people can more easily find you.</li>
            <li>
              Calendly widget so people can set appointments straight from your
              website.
            </li>
            <li>
              Ecommerce integrations with Shopify or Bigcommerce to allow people
              to see certain products and sales from your website.
            </li>
            <li>Chat window via Zendesk, Intercom, or Drift among others.</li>
            <li>File upload and storage from your website.</li>
            <li>PDF conversation and downloading from your website.</li>
            <li>Accounting integrations via Quickbooks among others.</li>
            <li>
              Shipping and Tracking portals and widgets via UPS, Fedex, etc.
            </li>
            <li>Video hosting and streaming.</li>
            <li>
              Electronic form signing straight from your website via DocuSign or
              Adobe.
            </li>
            <li>Survey tools and access via SurveyMonkey among others.</li>
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
      </div>
    </>
  );
}
