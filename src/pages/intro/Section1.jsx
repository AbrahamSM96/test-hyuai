import React from "react";
import styles from "./Intro.module.css";
import icon_benefit1 from "../../assets/images/intro/icon_benefit01.png";
import icon_benefit2 from "../../assets/images/intro/icon_benefit02.png";
import icon_benefit3 from "../../assets/images/intro/icon_benefit03.png";
import Button from "@components/Button";
export default function Section1() {
  return (
    <div className={styles._wrap1}>
      <div className={styles._group}>
        <h3>Our car buying experience is now fully online.</h3>
        <p>
          You can find and purchase a new Hyundai without leaving the comfort of
          your home. <br />
          Participating dealers even deliver the vehicle right to your door.
          Simple, safe and convenient, Click to Buy is a smart way to shop for
          your next car.
        </p>
        <Button text="Get Started" />
      </div>
      <div className={styles._group}>
        <h3>How to buy a car online? What’s good?</h3>
        <p>Discover the benefits of purchasing the Hyundai you love online.</p>
        <ul className={styles._benefit_list}>
          <li>
            <i>
              <img src={icon_benefit1.src} />
            </i>
            <em>Easy steps</em>
            <p>
              Simply compare models, configure your dream car, sort out your
              finance and even pay a deposit - all in one place.
            </p>
          </li>
          <li>
            <i>
              <img src={icon_benefit2.src} />
            </i>
            <em>Contactless</em>
            <p>
              We’ve streamlined the steps so you can secure your car online or
              over the phone with your local dealer.
            </p>
          </li>
          <li>
            <i>
              <img src={icon_benefit3.src} />
            </i>
            <em>Delivered to Your Door</em>
            <p>
              We’ve streamlined the steps so you can secure your car online or
              over the phone with your local dealer.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
