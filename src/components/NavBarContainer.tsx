import React, { useState } from "react";
import styles from "@/styles/Nav/Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { pathRootHelper } from "@/helpers/pathRootHelper";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export default function NavBarContainer() {
  const router = useRouter();
  const pathRoot = pathRootHelper(router.pathname);
  const [mobileNav, setMobileNav] = useState(false);
  const [servicesSub, setServicesSub] = useState(false);
  const [ourWorkSub, setOurWorkSub] = useState(false);
  console.log(router.pathname);
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
          <div id={styles.servicesContainer}>
            <div>
              <Link
                href="/services"
                className={
                  pathRoot == "/services" ? styles.linkActive : styles.link
                }>
                Services
              </Link>
            </div>
            <ul id={styles.servicesdropdowncontent}>
              <li style={{ marginBottom: 20 }}>
                {" "}
                <Link
                  href="/services"
                  className={
                    pathRoot == "/services"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Services
                </Link>
              </li>
              <li style={{ fontSize: 12 }}>
                <Link
                  href="/services/packages"
                  className={
                    router.pathname == "/services/packages"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Website Packages
                </Link>
              </li>
              <li style={{ fontSize: 12 }}>
                <Link
                  href="/services/maintenance"
                  className={
                    router.pathname == "/services/maintenance"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Maintenance Packages
                </Link>
              </li>
              <li style={{ fontSize: 12 }}>
                <Link
                  href="/services/integrations"
                  className={
                    router.pathname == "/services/integrations"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Suggested Integrations
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/reviews"
            className={
              pathRoot == "/reviews" ? styles.linkActive : styles.link
            }>
            Reviews
          </Link>
          <div id={styles.ourworkContainer}>
            <div>
              <Link
                href="/ourwork"
                className={
                  pathRoot == "/ourwork" ? styles.linkActive : styles.link
                }>
                Our Work
              </Link>
            </div>
            <ul id={styles.ourworkdropdowncontent}>
              <li style={{ marginBottom: 20 }}>
                {" "}
                <Link
                  href="/ourwork"
                  className={
                    pathRoot == "/ourwork"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Our Work
                </Link>
              </li>
              <li style={{ fontSize: 12 }}>
                <Link
                  href="/ourwork/apps"
                  className={
                    router.pathname == "/ourwork/apps"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Custom Applications
                </Link>
              </li>
              <li style={{ fontSize: 12 }}>
                <Link
                  href="/ourwork/websites"
                  className={
                    router.pathname == "/ourwork/websites"
                      ? styles.dropdownlinkactive
                      : styles.dropdownlink
                  }>
                  Custom Websites
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/about"
            className={pathRoot == "/about" ? styles.linkActive : styles.link}>
            About Us
          </Link>
          <Link
            href="/game"
            className={pathRoot == "/game" ? styles.linkActive : styles.link}>
            Logo Attack
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
            <div
              style={{ marginLeft: 25 }}
              onClick={() => setServicesSub(!servicesSub)}>
              <span
                className={
                  pathRoot == "/services" ? styles.linkActive : styles.link
                }>
                Services
              </span>{" "}
              {servicesSub ? (
                <span>
                  <MdOutlineKeyboardArrowDown
                    style={{ verticalAlign: "text-top", color: "white" }}
                    size={22}
                  />
                </span>
              ) : (
                <span>
                  <MdKeyboardArrowRight
                    style={{ verticalAlign: "text-top", color: "white" }}
                    size={22}
                  />
                </span>
              )}
            </div>
            {servicesSub && (
              <div onClick={() => setMobileNav(false)}>
                <div className={styles.subMenuServices}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      {" "}
                      <Link href="/services" className={styles.dropdownlink}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/packages"
                        className={
                          router.pathname == "/services/packages"
                            ? styles.dropdownlinkactive
                            : styles.dropdownlink
                        }>
                        Website Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/maintenance"
                        className={
                          router.pathname == "/services/maintenance"
                            ? styles.dropdownlinkactive
                            : styles.dropdownlink
                        }>
                        Maintenance Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/integrations"
                        className={
                          router.pathname == "/services/integrations"
                            ? styles.dropdownlinkactive
                            : styles.dropdownlink
                        }>
                        Suggested Integrations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/reviews"
                className={
                  pathRoot == "/reviews" ? styles.linkActive : styles.link
                }>
                Reviews
              </Link>
            </div>
            <div
              style={{ marginLeft: 25 }}
              onClick={() => setOurWorkSub(!ourWorkSub)}>
              <span
                className={
                  pathRoot == "/ourwork" ? styles.linkActive : styles.link
                }>
                Our Work
              </span>{" "}
              {servicesSub ? (
                <span>
                  <MdOutlineKeyboardArrowDown
                    style={{ verticalAlign: "text-top", color: "white" }}
                    size={22}
                  />
                </span>
              ) : (
                <span>
                  <MdKeyboardArrowRight
                    style={{ verticalAlign: "text-top", color: "white" }}
                    size={22}
                  />
                </span>
              )}
            </div>
            {ourWorkSub && (
              <div onClick={() => setMobileNav(false)}>
                <div className={styles.subMenuServices}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      {" "}
                      <Link href="/ourwork" className={styles.dropdownlink}>
                        Our Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ourwork/apps"
                        className={
                          router.pathname == "/ourwork/apps"
                            ? styles.dropdownlinkactive
                            : styles.dropdownlink
                        }>
                        Custom Applications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ourwork/websites"
                        className={
                          router.pathname == "/services/maintenance"
                            ? styles.dropdownlinkactive
                            : styles.dropdownlink
                        }>
                        Custom Websites
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/about"
                className={
                  pathRoot == "/about" ? styles.linkActive : styles.link
                }>
                About Us
              </Link>
            </div>
            <div onClick={() => setMobileNav(false)}>
              <Link
                href="/game"
                className={
                  pathRoot == "/game" ? styles.linkActive : styles.link
                }>
                Logo Attack
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
