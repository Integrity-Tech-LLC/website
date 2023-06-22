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
            WeCleanLocal saw a need in the cleaning industry for an application
            tailor-made for their unique administrative needs. Integrity Tech
            was responsible for taking their design concept and turning it into
            a functional SaaS app.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>Objective</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Integrity Tech managed to take a design concept and not only
            complete the development of the actual software, but also plan its
            data architecture. The WeClean App is not only an administrative
            tool. It also acts as a POS system, a marketing tool, and a customer
            management tool. We developed all of these features while at the
            same time making sure that the data was properly handled. With this
            level of complexity, it's easy to introduce bugs which we took steps
            to minimize at every turn.
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
            The data structure of the WeClean App was relationally structured so
            it became important to build the app in a specific sequence.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Teir 1: Admin Portal
              </span>{" "}
              The purpose of the admin portal was to give a way for the
              WeCleanLocal staff to create and manage accounts.
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 2: Partner Account Settings
              </span>
              The partner account settings allowed each account to have a fully
              customized experience that fit their company needs.
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
              Being able to add customers and cleaners to be later attached to
              bookings gives this application a full POS system
            </li>
            <li>
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 5: Coupons and Giftcards
              </span>
              Partners can create promotions for their cleaning business right
              from the dashboard.
            </li>
            <li>
              {" "}
              <span style={{ fontWeight: 700, paddingRight: 3 }}>
                Tier 6: Bookings
              </span>
              Bookings is where everything comes together. It's a cleaning order
              form that utilizes all the previous tiers of data.
            </li>
          </ul>
          <br />
          <h2 className={styles.descriptionHeader}>Conclusion</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            The WeClean SaaS App is an expanding project and additional features
            are planned for the future. Integrity Tech's relationship with
            WeCleanLocal remains strong, and we look forward to helping them
            grow their application further in the future.
          </p>
        </div>
      </div>
    </>
  );
}
