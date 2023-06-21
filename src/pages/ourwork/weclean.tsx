import React from "react";
import styles from "@/styles/Pages/WeClean.module.css";
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
        <div className={styles.descriptionBlue}>
          <h2 className={styles.headerBlue}>WeClean Project Overview</h2>
          <p className={styles.textBlue}>
            We build a large-scale SaaS application for WeCleanLocal. There is a
            lot to unpack with this project and we are very proud of it.
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          <Image
            src="/WeClean.png"
            alt="weclean"
            width={80}
            height={80}
            className={styles.img}
            priority
          />
          <h2 className={styles.descriptionHeader}>
            Architecture and Planning
          </h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            WeCleanLocal needed an app that had multiple levels of user access
            and a very complex data structure. This required careful planning on
            how we were going to store and manage data. We knew this was the
            first and most important step in the entire process because of the
            size and complexity of the application. We had to make sure we were
            not only planning to meet immediate requirements, but also set the
            app up for future growth. We carefully considered every possible
            blocker. We knew it was essential that we handled the data flow
            correctly right from the start. <br />
            <br />
            As a result we decided on a database structure using a relational
            flow. In a relational database you can implement a parent-child
            structure. This was perfect for our needs.
            <br />
            <br />
            With the data architecture created, we got to work turning
            WeCleanLocal's dream into a reality. Based on the data tier system
            of this application, we thought it was best to start at the top tier
            and work our way down.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>Tier 1: Admin Portal</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Throughout this overview you'll hear us discuss WeCleanLocal's
            application as a single application. In actuality the application is
            actually two applications. The project included an admin portal and
            a client portal and each application was stored and hosted
            separately, however they used the same database.
            <br />
            <br />
            The purpose of the admin portal was to give a way for the
            WeCleanLocal staff to create and manage partner accounts as well as
            their own internal staff member accounts.
            <br />
            <br />
            When a partner account was created, the application allowed for a
            completely customized experience per partner. The WeCleanLocal staff
            could set custom monthly pricing and even give each plan a custom
            name. Upon account creation, the partner's payment type would be
            charged via the Stripe API. It would then generate a user and
            company profile for the partner, set default task lists and
            categories for cleanings, and send a welcome email with a prompt to
            finish setting up their account, create their password, ect.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>
            Tier 2: Partner Account Settings
          </h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            The partner account settings allowed each partner account to have a
            fully customized experience that fit their company needs. Here is a
            list of some of the options a partner could set for their account:
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>Upload company logos</li>
            <li>Set the timezone for the account</li>
            <li>
              Set payment rates and other settings for their company's cleaners
            </li>
            <li>Set tax rates and cancelation fees</li>
            <li>Turn on or off specific cleaning services</li>
            <li>Create customized banners for each cleaning service type</li>
            <li>
              Create customized task categories and lists for each cleaning
              service type
            </li>
            <li>
              Change their payment method and/or add a secondary payment method
            </li>
            <li>
              View billing history for each transaction on the account and see
              their current plan information
            </li>
            <li>Customize their personal profile</li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            With such a high level of customization, there is very little
            missing from each user's experience.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>Tier 3: Service Areas</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Service areas are where this application starts to shine. Partners
            can create customized service areas for each cleaning service type
            depending on the area they are serving. Each service area comes with
            a list of serviceable spaces and extra services by default, however
            this list can be completely customized for each service area. By
            adding a service area you can customize the following:
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>Set a list of zip codes that apply to this service area</li>
            <li>Set the cleaning service type used for this service area</li>
            <li>Set the timezone for this service area</li>
            <li>Give the service area a custom name</li>
            <li>
              Set customized pricing and tax rates for the specific service area
            </li>
            <li>Set customized serviceable spaces and extra services</li>
            <li>
              Set customized pricing and descriptions as well as icon art for
              each serviceable space and extra service
            </li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            These service areas are used all over the application when creating
            bookings, assigning cleaners to those bookings, etc. Service areas
            are required to be attached to most items added in later tiers. When
            you create a service area you can't use the same zipcode to create
            another unless the cleaning service type is different. Validation
            exists within this application to guard against duplication.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>
            Tier 4: Customers and Cleaners
          </h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Customer and Cleaner accounts are based heavily on service areas.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>
              Customers can set a primary address on account creation and add
              more addresses on account edit
            </li>
            <li>Customers can add secondary contacts to their account</li>
            <li>
              Cleaners can set their hourly rate and travel time allowance
            </li>
            <li>Cleaners can be set as trainees or individual cleaners</li>
            <li>
              If a cleaner is set as a trainee they can not be assigned to a
              booking without another cleaner
            </li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Being able to add customers and cleaners to be later attached to
            bookings gives this application a full POS system right at the
            partner's finger tips.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>
            Tier 5: Coupons and Giftcards
          </h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Partners can create promotions for their cleaning business right
            from the dashboard. Electronic coupons and giftcards are used to
            give customized discounts to customers to be used in future
            bookings.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>Both base coupons and referral coupons can be created</li>
            <li>
              A coupon's discount value can be set as either a percentage or a
              flat value
            </li>
            <li>
              For referral coupons, the referree discount can also be set as a
              percentage or a flat value
            </li>
            <li>
              Coupons can have customized conditions in place such as a max
              number of uses, a required price range, and certain days of the
              week
            </li>
            <li>
              Certain cleaning service types and service areas can be turned on
              or off for each coupon
            </li>
            <li>Gift cards can be sent to customers by email</li>
            <li>Customized artwork can be set for each giftcard</li>
            <li>More then one gift card can be applied to a booking</li>
            <li>
              Payment for each gift card is taken via the Stripe API at giftcard
              creation
            </li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            The gift cards and coupons feature turn WeCleanLocal's application
            into a marketing tool for the partner's business.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>Tier 6: Bookings</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Bookings is where everything comes together. The step-by-step
            process for creating a booking is outlined below.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>Select a cleaning service type</li>
            <li>
              Select a customer. You can also create a new customer on the fly,
              or select an alternative address for the selected customer. If the
              address doesn't exist you can add a new address right from the
              booking form. Each customer that gets added to a booking will be
              validated against the service areas. If no service area exists for
              the customer's address, you will either need to add the zipcode to
              a service area or use a different address
            </li>
            <li>
              A service area is automatically selected based on the customer's
              zipcode. The list of customized serviceable spaces and extra
              services for that service area appear on the booking form as
              selectable options. These services can be added to the booking and
              the cost for each gets added to the total
            </li>
            <li>
              Set a booking date and assign a cleaner. More than one cleaner can
              be added to the booking. The booking form automatically checks to
              see if the cleaner is a trainee and disallows them to work alone
              on the booking
            </li>
            <li>Tips can be added and are calculated on the total</li>
            <li>
              Redemptions can be added to the booking. This includes coupon
              codes, gift cards, and a customized discount that can be added
              right from the booking form
            </li>
            <li>
              Partner accounts have an additional option when adding a booking
              that is not given to anyone else. They can override the price and
              booking duration. Any value they add to these fields will
              completely override the automated calculations
            </li>
            <li>
              On the right side of the booking form, the order breakdown and
              total cost is always updated as the booking form is altered
            </li>
            <li>
              You can now submit your booking. A confirmation screen appears and
              an email gets sent to the customer's email address
            </li>
          </ul>
          <br />
          <p style={{ paddingLeft: 30 }}>
            As you can see, the booking form is where everything comes together.
            The WeCleanLocal SaaS App is not only an administrative tool. It
            also acts as a POS system, a marketing tool, and a customer
            management tool. It's everything you need all in one.
          </p>
          <br />
          <h2 className={styles.descriptionHeader}>Tools and Technologies</h2>
          <br />
          <p style={{ paddingLeft: 30 }}>
            Below is a breakdown of all of the tools that we used to build this
            full-stack application.
          </p>
          <br />
          <ul style={{ paddingLeft: 60 }}>
            <li>React.js</li>
            <li>Next.js [with a customized server]</li>
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
            We wanted to build WeCleanLocal's application using the latest
            tools, so we decided to build it with the Next.js framework. We knew
            that alone wasn't going to be enough. Next.js encourages server-side
            rendering, but we knew with how dynamic this app was going to be
            that we needed a client-based rendering model. As a result, Next.js
            came up short on its own. Next.js allows for the implementation of a
            customized server, and this process is outlined in their
            documentation. This allowed us to use Next.js for the front end,
            while being able to handle server requests separately.
            <br />
            <br /> TypeScript was utilized to help us define our data types and
            interfaces, as well as handle some enumerations.
            <br />
            <br /> As for handling complex state, very few tools do the job
            better than Redux. While React has a built-in Context API and
            Next.js uses the Fetch API, neither of these were truly sufficient
            to handle the type of data structure nor the complexity we were
            looking for. The data flow of Redux is very clean and easy to
            understand if you come into the application with fresh eyes. The
            most recent version of React-Redux also uses the Context API under
            the hood, so that definitely influenced our decision. Redux was by
            far the best option and it worked perfectly for what we needed.{" "}
            <br />
            <br /> PostgreSQL was decided for the database and is gaining a lot
            of popularity in the tech world. It allowed us to define a
            relational data structure. This definitely won't be the last time we
            utilize it.
          </p>
        </div>
      </div>
    </>
  );
}
