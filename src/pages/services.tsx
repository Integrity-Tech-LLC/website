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
          <h2 className={styles.bannerHeader}>Quality Matters</h2>
          <p className={styles.bannerText}>
            If you're looking for an app built with a tremendous amount of care
            and consideration, look no further than Integrity Tech. Throughout
            our experience we have learned what separates the good applications
            from the bad, so you can rest assured that you are in good hands. As
            a company we love what we do and we put our heart and soul into
            every line of code. We care about your dream.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Custom Web Apps</h2>
        <p className={styles.text}>
          Have a dream that seems out of reach? Let us help. From website
          creation all the way to complex system integrations, we use all of the
          latest tools and technologies to ensure your dream is not out of
          reach.{" "}
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>Custom Mobile Apps</h2>
        <p className={styles.text}>
          Native apps are gaining popularity. Don't fall behind the trends. At
          Intregity Tech we use the latest in mobile development technology when
          constructing your application.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>API System Integrations</h2>
        <p className={styles.text}>
          Are you using third party software but find it is lacking one or two
          key features? Many of these third party programs have available
          Application Programming Interfaces (APIs). These APIs allow us to
          write custom implementations that can assist in solving these
          problems.
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
        </p>
      </div>
    </>
  );
}
