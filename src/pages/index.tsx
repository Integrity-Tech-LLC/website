import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import smartphone from "public/smartphone.jpg";
import brand from "public/brand.jpeg";
import Link from "next/link";
import { useEffect, useState } from "react";
import contact from "public/contactbackground.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current) {
      setTimeout(() => {
        if (current === 1) {
          setCurrent(2);
        } else if (current === 2) {
          setCurrent(3);
        } else if (current === 3) {
          setCurrent(1);
        }
      }, 8000);
    }
  }, [current]);
  return (
    <>
      <div className={styles.descriptionBlue}>
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
        <div style={{ marginTop: "-80px" }} className={styles.descriptionBlack}>
          <h2 className={styles.headerBlack}>What We Offer</h2>
          <p className={styles.textBlack}>
            We offer everything from website creation to custom app development.
            We help you connect to the software you need.
          </p>
          <div className={styles.link}>
            <Link href={`/services`}>
              Services <AiOutlineArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.descriptionWhite}>
        <h2 className={styles.headerWhite}>We Make an Impression!</h2>
        {current === 1 && (
          <div className={styles.description}>
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
              <p>Chris helped us turn our wireframes into working Software.</p>
              <br />
              <p className={styles.review}>
                <span className={styles.name}>--Jared Hineman</span>: Co-Founder
                of WeCleanLocal
              </p>
            </div>
          </div>
        )}
        {current === 2 && (
          <div className={styles.description}>
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
                functional software product in just a few weeks.
              </p>
              <br />
              <p className={styles.review}>
                <span className={styles.name}>--Jason Gibb</span>: COO at Nash
                Capital
              </p>
            </div>
          </div>
        )}
        {current === 3 && (
          <div className={styles.description}>
            <div className={styles.text}>
              <Image
                src="/homero.jpeg"
                alt="homero"
                width={80}
                height={80}
                className={styles.img}
                priority
              />
              <br />
              <p>
                I strongly recommend Chris, he is as smart as he is determined.
              </p>
              <br />
              <p className={styles.review}>
                <span className={styles.name}>--Homero Rios</span>: Embedded
                Software Engineer
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
        <div style={{ marginTop: "-80px" }} className={styles.descriptionBlack}>
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
        <div className={styles.descriptionWhite}>
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
                need to reach them. I have a true passion to help people and
                it's the driving force behind not just my business, but my
                entire way of life.
              </p>
              <br />
              <div className={styles.review}>
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
            className={styles.descriptionBlack}>
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
