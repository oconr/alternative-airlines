"use client";

import styles from "@/styles/components/Hero.module.scss";
import backgroundImage from "@/assets/images/background-image.jpg";
import TrustScore from "@/assets/images/trustpilot.png";
import Image from "next/image";
import { useState } from "react";
import LocationInput from "./LocationInput";
import Container from "./Container";
import DateInput from "./DateInput";
import PassengerInput from "./PassengerInput";

export default function Hero() {
  const [type, setType] = useState<"return" | "one-way" | "multi-city">(
    "return"
  );

  function changeType(e: any, type: "return" | "one-way" | "multi-city") {
    e.preventDefault();
    setType(type);
  }

  const [direct, setDirect] = useState(false);

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <Container>
        <div className={styles.wrapper}>
          <h1>Search and book flights to Australia</h1>
          <h2>Buy your flights now and pay later</h2>
          <div className={styles.score}>
            <Image src={TrustScore} alt="Trustpilot" />
            <div className={styles.rating}>
              <p>
                TrustScore <span>4.5</span>
              </p>
              <div className={styles.divider}></div>
              <p>
                <span>6,500</span> reviews
              </p>
            </div>
          </div>
          <form>
            <div className={styles.types}>
              <button
                onClick={(e) => changeType(e, "return")}
                className={type === "return" ? styles.active : ""}
              >
                Return
              </button>
              <button
                onClick={(e) => changeType(e, "one-way")}
                className={type === "one-way" ? styles.active : ""}
              >
                One way
              </button>
              <button
                onClick={(e) => changeType(e, "multi-city")}
                className={type === "multi-city" ? styles.active : ""}
              >
                Multi-city
              </button>
              <div
                className={`${styles.direct} ${direct ? styles.active : ""}`}
              >
                <span>Direct flights only</span>
                <div
                  className={styles.switch}
                  onClick={() => setDirect(!direct)}
                >
                  <div className={styles.slide}></div>
                </div>
              </div>
            </div>
            <div className={styles.outerInputWrapper}>
              <div className={styles.inputWrapper}>
                <LocationInput />
              </div>
              <div className={styles.innerInputWrapper}>
                <div className={styles.inputWrapper}>
                  <DateInput />
                </div>
                <div className={styles.inputWrapper}>
                  <PassengerInput />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
