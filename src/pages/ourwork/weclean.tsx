import React from "react";
import styles from "@/styles/Pages/OurWork/WeClean.module.css";
import weclean from "public/WeClean.png";
import Image from "next/image";

export default function WeClean() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${weclean.src})`,
          width: "100%",
          backgroundSize: "250px 250px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>WeClean Project Overview</h2>
          <p className={styles.bannerText}>
            We built a large-scale SaaS application for WeCleanLocal. There is a
            lot to unpack with this project and we are very proud of it.
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <Image
            src="/WeClean.png"
            alt="weclean"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <h2 className={styles.descriptionHeader}>Introduction</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            WeCleanLocal saw a demand in the cleaning industry for a tool to
            assist with their administrative needs. Integrity Tech was
            responsible for taking their design concept and turning it into a
            functional SaaS app.
          </p>

          <br />
          <h2 className={styles.descriptionHeader}>Project's Main Tech</h2>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Redux</li>
            <li>Redux Sagas</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>Stripe API</li>
            <li>SendGrid API</li>
            <li>FileStack API</li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            WeClean's App uses the latest technologies while at the same time
            utilizing tools uniquely fit to handle the complexity we needed. The
            technologies chosen were part of the architecture process, and we're
            confident we chose the right tools for the job.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>The Plan</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            The data of the WeClean App was relationally structured, so it
            became important to build the app in a specific sequence.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Teir 1: Admin Portal
              </span>{" "}
              This is to give a way for the WeCleanLocal staff to create and
              manage accounts.
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 2: Partner Account Settings
              </span>
              This allows each account to have a fully customized experience
              that fits their company needs.
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 3: Service Areas
              </span>
              Partners can create customized service areas for each cleaning
              service type depending on the area they are serving.
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 4: Customers and Cleaners
              </span>
              A full POS system allows customer and cleaner accounts to be added
              to bookings.
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 5: Coupons and Giftcards
              </span>
              Partners can create promotions for their cleaning business from
              the dashboard.
            </li>
            <li>
              {" "}
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 6: Bookings
              </span>
              This detailed booking form utilizes all previous tiers of data.
            </li>
          </ul>
          <br />
          <h2 className={styles.descriptionHeader}>Conclusion</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Integrity Tech completed the development of this software which
            includes an administrative tool, a POS system, a marketing tool, and
            a customer management tool. The WeClean SaaS App is an expanding
            project and additional features are planned for the future.
            Integrity Tech's relationship with WeCleanLocal remains strong, and
            we look forward to helping them grow their application further in
            the future.
          </p>
        </div>
      </div>
    </>
  );
}
