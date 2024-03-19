import Image from "next/image";
import styles from "@/styles/Home.module.css";
import smartphone from "public/smartphone.jpg";
import brand from "public/brand.jpeg";
import Link from "next/link";
import { useEffect, useState } from "react";
import contact from "public/contactpagephoto.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current) {
      setTimeout(() => {
        if (current === 1) {
          setCurrent(2);
        } else if (current === 2) {
          setCurrent(1);
        }
      }, 8000);
    }
  }, [current]);
  return (
    <>
      <div className={styles.banner}>
        <Image
          className={styles.logo}
          src="/homepagelogo.png"
          alt="company logo"
          width={400}
          height={250}
          priority
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${smartphone.src})`,
          width: "100%",
          backgroundSize: "100% 400px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div style={{ marginTop: "-80px" }} className={styles.bodyBlack}>
          <h2 className={styles.headerBlack}>
            Your resource for custom websites and apps
          </h2>
          <p className={styles.textBlack}>
            We offer fully customizable websites and web applications tailored
            to your unique business needs, ensuring a fully utilized online
            presence.{" "}
          </p>
          <div className={styles.link}>
            <Link href={`/services`}>
              Services <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bodyWhite}>
        <h2 className={styles.headerWhite}>We Make an Impression!</h2>
        {current === 1 && (
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
              <br />
              <p className={styles.review}>
                Chris helped us turn our wireframes into working Software.
              </p>
              <br />
              <p className={styles.signature}>
                <span className={styles.name}>--Jared Hineman</span>: Co-Founder
                of WeCleanLocal
              </p>
            </div>
          </div>
        )}
        {current === 2 && (
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
              <p className={styles.review}>
                Chris helped us take a design concept from scratch to fully
                functional software product in just a few weeks.
              </p>
              <br />
              <p className={styles.signature}>
                <span className={styles.name}>--Jason Gibb</span>: COO at Nash
                Capital
              </p>
            </div>
          </div>
        )}

        <div className={styles.linkReviews}>
          <Link href={`/reviews`}>
            Reviews <AiOutlineArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${brand.src})`,
          width: "100%",
          backgroundSize: "100% 430px",
          backgroundRepeat: "no-repeat",
          marginTop: 100,
        }}>
        <div style={{ marginTop: "-80px" }} className={styles.bodyBlack}>
          <h2 className={styles.headerBlack}>Our Work Speaks For Itself</h2>
          <div className={styles.weclean}>
            <h2 className={styles.header}>WeClean SaaS App</h2>
            <div className={styles.text}>
              <Image
                src="/WeClean.png"
                alt="weclean"
                width={80}
                height={80}
                className={styles.wecleanimg}
                priority
              />

              <p>
                The WeClean SaaS App has a built in POS system, a user account
                creation feature, online booking, scheduling, and assigning. It
                even stores billing history and automatically calculates cost of
                bookings based on preset user settings.
              </p>
              <br />
            </div>
          </div>
          <div className={styles.link}>
            <Link href={`/ourwork/weclean`}>
              Project Summary <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className={styles.bodyWhite}>
          <h2 className={styles.headerWhite}>Who is Integrity Tech?</h2>
          <div className={styles.weclean}>
            <h2 className={styles.header}>Christopher Neisen</h2>
            <div className={styles.text}>
              <Image
                src="/chris.jpeg"
                alt="Chris"
                width={80}
                height={80}
                className={styles.img}
                priority
              />

              <p>
                Hi! My name is Chris and I founded Integrity Tech to help people
                bridge the gap between their dreams and the technologies they
                need to reach them. Throughout my career I have noticed how much
                unlocked potential there is in technology, and how few people
                there are who have access. I decided to start my business to
                help empower others by being their key to technology.
              </p>
              <br />
              <div className={styles.signature}>
                --Founder and Lead Software Engineer
              </div>
            </div>
          </div>
          <div className={styles.linkWhite}>
            <Link href={`/about`}>
              Read More <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${contact.src})`,
            width: "100%",
            backgroundSize: "100% 400px",
            backgroundRepeat: "no-repeat",
            marginTop: 100,
          }}>
          <div
            style={{ marginTop: "-80px", height: 400 }}
            className={styles.bodyBlack}>
            <h2 className={styles.headerBlack}>Get In Touch!</h2>
            <p className={styles.textBlack}>
              We offer free estimates! Contact us below and we'll walk you
              through the process from start to finish. We look forward to
              hearing from you!
            </p>
            <div className={styles.contact}>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
