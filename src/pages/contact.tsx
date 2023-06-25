import React, { useEffect, useState } from "react";
import styles from "@/styles/Pages/Contact.module.css";
import contact from "public/contactbackground.jpeg";
import Image from "next/image";
import { emailFormatValidationHelper } from "@/helpers/emailFormatValidationHelper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { BiMailSend } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("I'm requesting an estimate");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [localToast, setLocalToast] = useState(false);
  const [localToastText, setLocalToastText] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [height, setHeight] = useState(2500);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (localToast) {
      setTimeout(() => {
        setLocalToast(false);
        setLocalToastText("");
      }, 5000);
    }
  }, [localToast]);

  useEffect(() => {
    if (messageSent) {
      setTimeout(() => {
        setMessageSent(false);
        setFullname("");
        setEmail("");
        setReason("I'm requesting an estimate");
        setMessage("");
      }, 6000);
    }
  }, [messageSent]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!fullname || !email || !message) {
      setLocalToast(true);
      setLocalToastText("Please fill out all contact form fields");
      setValid(false);
      return;
    } else if (!emailFormatValidationHelper(email)) {
      setLocalToast(true);
      setLocalToastText("Email address must be in the correct format");
      setValid(false);
      setEmailValid(false);
    }
    if (!executeRecaptcha) {
      setLocalToast(true);
      setLocalToastText("ReCaptcha was not executed");
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      setLocalToast(true);
      setLocalToastText("Captcha validation failed");
      return;
    }
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email,
        fullname,
        reason,
        message,
        token,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setLocalToast(true);
      setLocalToastText("Something went wrong");
      console.log("this is the error", error);
      return;
    }
    setMessageSent(true);
  };

  useCalendlyEventListener({
    onDateAndTimeSelected: () => setHeight(1100),
    onEventTypeViewed: () => setHeight(2500),
  });

  return (
    <>
      {localToast && (
        <div className={styles.error}>
          <div style={{ width: "95%", float: "left" }}>{localToastText}</div>
          <div
            style={{ width: "5%", float: "right" }}
            className={styles.x}
            onClick={() => {
              setLocalToast(false);
              setLocalToastText("");
            }}>
            <Image
              src="/closeicon.svg"
              alt="x"
              width={12}
              height={12}
              priority
            />
          </div>
        </div>
      )}
      <div
        style={{
          backgroundImage: `url(${contact.src})`,
          width: "100%",
          backgroundSize: "100% 650px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>We're Glad to Hear From You!</h2>
          <p className={styles.bannerText}>
            Reach out for a free estimate! Our estimation process is fully
            transparent. You will always know how much and what you are paying
            for before any agreements are made. We're happy to answer any
            general questions you might have as well.
          </p>
        </div>
      </div>
      {!messageSent ? (
        <div className={styles.body}>
          <div className={styles.text}>
            <div className={styles.inputFieldRadio}>
              <input
                className={styles.radio}
                type="radio"
                value="I'm requesting an estimate"
                checked={reason === "I'm requesting an estimate"}
                onChange={() => setReason("I'm requesting an estimate")}
              />
              <span
                style={{
                  marginLeft: 10,
                  verticalAlign: "top",
                  height: 20,
                }}>
                I'm requesting an estimate
              </span>
            </div>
            <div className={styles.inputFieldRadio}>
              <input
                className={styles.radio}
                type="radio"
                value="I have a question about something else"
                checked={reason === "I have a question about something else"}
                onChange={() =>
                  setReason("I have a question about something else")
                }
              />
              <span
                style={{
                  marginLeft: 10,
                  verticalAlign: "top",
                  height: 20,
                }}>
                I have a question about something else
              </span>
            </div>
            <br />
            <br />
            {reason === "I have a question about something else" ? (
              <form onSubmit={handleSubmit}>
                <input
                  className={
                    valid || fullname ? styles.inputField : styles.inputFieldRed
                  }
                  placeholder="Full Name"
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
                <input
                  className={
                    (valid || email) && emailValid
                      ? styles.inputField
                      : styles.inputFieldRed
                  }
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {/* <select
                className={styles.inputField}
                name="reason"
                value={reason}
                onChange={(event) => setReason(event.target.value)}>
                <option value="I'm requesting an estimate">
                  I'm requesting an estimate
                </option>
                <option value="I have a question about something else">
                  I have a question about something else
                </option>
              </select> */}
                <textarea
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  className={
                    valid || message
                      ? styles.messageText
                      : styles.messageTextRed
                  }></textarea>
                <p className={styles.note}>
                  Note: We never store your information and will never contact
                  you without your permission.
                </p>
                <br />
                <div style={{ display: "inline-block", width: "100%" }}>
                  <button
                    className={styles.sendmail}
                    type="submit"
                    name="sendMessage">
                    <span>Send</span>
                    <BiMailSend size={34} />
                  </button>
                  <ul className={styles.contactList}>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "-161px",
                      }}>
                      <AiFillPhone size={20} />{" "}
                      <span style={{ marginLeft: 5 }}>701-429-4837</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "center" }}>
                      <GrMail size={20} />{" "}
                      <span style={{ marginLeft: 5 }}>
                        chris@integritytechsoftware.com
                      </span>
                    </li>
                  </ul>
                </div>
              </form>
            ) : (
              <InlineWidget
                url="https://calendly.com/integritytechsoftware/scope-estimation"
                styles={{ height }}
              />
            )}
          </div>
        </div>
      ) : (
        <div className={styles.body}>
          <p className={styles.confirm}>
            Thank you for your message! We'll reach out to you very soon!
          </p>
        </div>
      )}
    </>
  );
}
