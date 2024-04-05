import animations from "@/styles/Animations/Animations.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [team, setTeam] = useState(1);
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

  useEffect(() => {
    if (team) {
      setTimeout(() => {
        if (team === 1) {
          setTeam(2);
        } else if (team === 2) {
          setTeam(3);
        } else if (team === 3) {
          setTeam(1);
        }
      }, 8000);
    }
  }, [team]);
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.containerLogo}>
          <Image
            className={styles.logo}
            src="/homepagelogo.png"
            alt="company logo"
            width={400}
            height={250}
            priority
          />
        </div>
        <div className={styles.containerTop}>
          <AnimationOnScroll
            animateOnce={true}
            animateIn={animations.fadeInDown}>
            <h2 className={styles.headerWhite}>
              You dream it,
              <br />
              We build it
            </h2>
          </AnimationOnScroll>
          <br />
          <div className={styles.contactWhite}>
            <Link href="/contact">Book appointment</Link>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "-80px" }} className={styles.bodyBlack}>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.containerHeader}
            animateIn={animations.fadeInDown}>
            <h2 className={styles.headerBlack}>
              Your resource for custom websites and apps
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.container}
            animateIn={animations.fadeIn}>
            <p className={styles.textBlack}>
              We offer fully customizable websites and web applications tailored
              to your unique business needs, ensuring a fully utilized online
              presence.{" "}
            </p>
          </AnimationOnScroll>
          <div className={styles.contactBlack}>
            <Link href={`/services`}>Services</Link>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className={styles.bodyWhite}>
        <AnimationOnScroll
          animateOnce={true}
          className={styles.containerHeaderReviewsMobile}
          animateIn={animations.fadeInRight}>
          <h2 className={styles.headerWhite}>We Make an Impression!</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          className={styles.container}
          animateIn={animations.zoomIn}>
          {current === 1 && (
            <div className={styles.card}>
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
                  <span className={styles.name}>--Jared Hineman</span>:
                  Co-Founder of WeCleanLocal
                </p>
              </div>
            </div>
          )}
          {current === 2 && (
            <div className={styles.card}>
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
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          className={styles.containerHeaderReviews}
          animateIn={animations.fadeInRight}>
          <h2 className={styles.headerWhite}>We Make an Impression!</h2>
        </AnimationOnScroll>

        <div className={styles.contactWhite}>
          <Link href={`/reviews`}>Reviews</Link>
        </div>
        <br />
        <br />
      </div>
      <div>
        <div className={styles.bodyBlack}>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.containerHeaderOurWork}
            animateIn={animations.fadeInLeft}>
            <h2 className={styles.headerBlack}>Our Work Speaks For Itself</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.container}
            animateIn={animations.zoomIn}>
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
                  creation feature, online booking, scheduling, and assigning.
                  It even stores billing history and automatically calculates
                  cost of bookings based on preset user settings.
                </p>
                <br />
              </div>
            </div>
          </AnimationOnScroll>
          <div className={styles.contactBlack}>
            <Link href={`/ourwork/weclean`}>Project Summary</Link>
          </div>
          <br />
          <br />
        </div>
        <div className={styles.bodyWhite}>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.containerHeaderAboutMobile}
            animateIn={animations.fadeInDown}>
            <h2 className={styles.headerWhite}>Who is Integrity Tech?</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.container}
            animateIn={animations.zoomIn}>
            {team === 1 && (
              <div className={styles.card}>
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
                    I founded Integrity Tech to help people bridge the gap
                    between their dreams and the technologies they need to reach
                    them.
                  </p>
                  <br />
                  <br />
                  <div className={styles.signature}>
                    --Founder and Software Engineer
                  </div>
                </div>
              </div>
            )}
            {team === 2 && (
              <div className={styles.card}>
                <h2 className={styles.header}>Megan Neisen</h2>
                <div className={styles.text}>
                  <Image
                    src="/megan.png"
                    alt="Megan"
                    width={80}
                    height={80}
                    className={styles.img}
                    priority
                  />

                  <p>
                    In my spare time I like to read, write, and create art in my
                    sketchbook. During the summer I love being outside and I
                    enjoy riding my bike.
                    <br />
                    <br />
                  </p>
                  <br />
                  <div className={styles.signature}>
                    --Bookkeeper and Content Editor
                  </div>
                </div>
              </div>
            )}
            {team === 3 && (
              <div className={styles.card}>
                <h2 className={styles.header}>Cooper</h2>
                <div className={styles.text}>
                  <Image
                    src="/cooper.jpg"
                    alt="Cooper"
                    width={80}
                    height={80}
                    className={styles.img}
                    priority
                  />

                  <p>
                    I like to run everywhere, in every direction, for absolutely
                    no reason. I'm not always full of energy though. Sometimes
                    I'd rather stare up at the ceiling and sit very still for
                    hours.
                  </p>
                  <br />
                  <div className={styles.signature}>--Office Mascot</div>
                </div>
              </div>
            )}
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            className={styles.containerHeaderAbout}
            animateIn={animations.fadeInRight}>
            <h2 className={styles.headerWhite}>Who is Integrity Tech?</h2>
          </AnimationOnScroll>
          <div className={styles.contactWhite}>
            <Link href={`/about`}>Read More</Link>
          </div>
          <br />
          <br />
        </div>
        <div>
          <div style={{ paddingBottom: 100 }} className={styles.bodyBlack}>
            <AnimationOnScroll
              animateOnce={true}
              className={styles.containerHeaderContact}
              animateIn={animations.fadeInLeft}>
              <h2 className={styles.headerBlack}>Get In Touch!</h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              className={styles.container}
              animateIn={animations.fadeInRight}>
              <p className={styles.textBlack}>
                We offer free estimates! Contact us below and we'll walk you
                through the process from start to finish. We look forward to
                hearing from you!
              </p>
            </AnimationOnScroll>
            <br />
            <br />
            <div className={styles.contactBlack}>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
