import React from "react";
import styles from "@/styles/Pages/Reviews.module.css";
import review from "public/review.jpeg";
import Image from "next/image";

export default function Reviews() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${review.src})`,
          width: "100%",
          backgroundSize: "100% 250px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>We Invest In You!</h2>
          <p className={styles.bannerText}>
            At Integrity Tech, your mission becomes our mission. We are fully
            invested in you from day one. See what others have said who have
            worked with us.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <Image
            src="/jared.jpeg"
            alt="jared"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <p>
            Chris helped us turn our wireframes into working Software. Chris has
            been a very hard working full stack engineer that was able to stick
            to his timeline and deliver at a very high level. He has also been
            great at communicating potential issues and helping find a solution.
            He continues to go above and beyond to make sure that we are
            satisfied.
            <br />
            <br />
            <br />
            <br />
          </p>
          <br />
          <p className={styles.signature}>
            <span className={styles.name}>--Jared Hineman</span>: Co-Founder of
            WeCleanLocal
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <Image
            src="/jason.jpeg"
            alt="jason"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <p>
            Chris helped us take a design concept from scratch to fully
            functional software product in just a few weeks. We needed an
            experienced full-stack developer who could build a polished web app,
            and he delivered with great communication from start to finish. I
            appreciated his conscientious and thoughtful dev process and
            willingness to investigate different technical options. He is not
            afraid to suggest new ideas and collaborate on the best approach to
            meet customer needs.
          </p>
          <br />
          <p className={styles.signature}>
            <span className={styles.name}>--Jason Gibb</span>: COO at Nash
            Capital
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <Image
            src="/homero.jpeg"
            alt="homero"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <p>
            Chris has been mentoring me for some time now. His directions are
            very concise and he doesn't give up on me until I understand what we
            are going through. Chris also never just gives me the answers he
            helps me to discover the answer. I strongly recommend Chris, he is
            as smart as he is determined.
          </p>
          <br />
          <p className={styles.signature}>
            <span className={styles.name}>--Homero Rios</span>: Embedded
            Software Engineer
          </p>
        </div>
      </div>
    </>
  );
}
