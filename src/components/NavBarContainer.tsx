import React, { useState } from "react";
import styles from "@/styles/Nav/Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { pathRootHelper } from "@/helpers/pathRootHelper";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBarContainer() {
  const router = useRouter();
  const pathRoot = pathRootHelper(router.pathname);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className={styles.nav}>
        <div
          onClick={() => {
            setMobileNav(false);
            router.push("/");
          }}
          className={styles.logo}>
          <Image
            src="/icon_trimmed_transparent_customcolor.png"
            alt="company logo"
            width={28}
            height={46}
            priority
          />
        </div>
        <div
          onClick={() => {
            setMobileNav(false);
            router.push("/");
          }}
          className={styles.logo}>
          <Image
            src="/text_trimmed_transparent_customcolor.png"
            alt="company logo"
            width={90}
            height={30}
            priority
          />
        </div>
        <div className={styles.navLeft}>
          <Link
            href="/services"
            className={
              pathRoot == "/services" ? styles.linkActive : styles.link
            }>
            Services
          </Link>
          <Link
            href="/reviews"
            className={
              pathRoot == "/reviews" ? styles.linkActive : styles.link
            }>
            Reviews
          </Link>
          <Link
            href="/ourwork"
            className={
              pathRoot == "/ourwork" ? styles.linkActive : styles.link
            }>
            Our Work
          </Link>
          <Link
            href="/about"
            className={pathRoot == "/about" ? styles.linkActive : styles.link}>
            About Us
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/contact" className={styles.contact}>
            Contact Us
          </Link>
          <div
            className={styles.hamburger}
            onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
          <div className={styles.freeEstimate}>Get a Free Estimate Now!</div>
        </div>
      </div>
      {mobileNav && (
        <div className={styles.navMobile}>
          <div className={styles.linksMobile}>
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/services"
                className={
                  pathRoot == "/services" ? styles.linkActive : styles.link
                }>
                Services
              </Link>
            </div>
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/reviews"
                className={
                  pathRoot == "/reviews" ? styles.linkActive : styles.link
                }>
                Reviews
              </Link>
            </div>
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/ourwork"
                className={
                  pathRoot == "/ourwork" ? styles.linkActive : styles.link
                }>
                Our Work
              </Link>
            </div>
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/about"
                className={
                  pathRoot == "/about" ? styles.linkActive : styles.link
                }>
                About Us
              </Link>
            </div>
            <br />
            <br />
            <div onClick={() => setMobileNav(false)}>
              <Link href="/contact" className={styles.contactButtonMobile}>
                Contact Us
              </Link>
            </div>
            <br />
            {/* <div onClick={() => setMobileNav(false)}>
              <Link href="/contact" className={styles.freeEstimateMobile}>
                Get a Free Estimate Now!
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
