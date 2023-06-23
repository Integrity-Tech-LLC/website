import React from "react";
import styles from "@/styles/Pages/Services.module.css";
import smartphone from "public/smartphone.jpg";

export default function Services() {
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
          <h2 className={styles.bannerHeader}>Consider Us Your Key</h2>
          <p className={styles.bannerText}>
            Technology can be daunting, but unlocking its potential can be a
            game changer for your business. Consider Integrity Tech your key.
            Throughout our experience we have learned how much untapped
            potential there is in software. Very few people understand what you
            can truly achieve. We are here to help you gain access to the great
            unknown.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Software Integrations</h2>
        <p className={styles.text}>
          Are you using third party software but find it is lacking one or two
          key features? Or do you wish a certain process in your company could
          be automated? Software systems will often provide back doors called
          "APIs" that can be used to write custom logic. We can automate
          processes, tie systems together, and sometimes create brand new
          features.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Tutoring/Mentorship</h2>
        <p className={styles.text}>
          Are you an aspiring software developer? While much of this profession
          is self-taught, sometimes it would be nice to have someone come along
          beside you and help you work through things when you're stumped. We
          offer tutoring and mentorship to aspiring developers. Let's figure it
          out together!
          <br />
          <br />
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Custom Web Apps</h2>
        <p className={styles.text}>
          Have a dream that seems out of reach? Let us help. From website
          creation all the way to tailor-made systems, we connect you to the
          power of software. <br />
          <br />
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Custom Mobile Apps</h2>
        <p className={styles.text}>
          Native apps are gaining popularity. Don't fall behind the trends. Let
          Integrity Tech unlock the door for you. We use the latest in mobile
          development technology when constructing your application.
        </p>
      </div>
    </>
  );
}
