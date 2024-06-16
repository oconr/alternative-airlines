import styles from "@/styles/components/Cancellation.module.scss";
import Container from "./Container";
import Image from "next/image";

import Illness from "@/assets/icons/illness.svg";
import Weather from "@/assets/icons/weather.svg";
import Refundable from "@/assets/icons/refundable.svg";
import Emergency from "@/assets/icons/emergency.svg";
import Breakdown from "@/assets/icons/breakdown.svg";
import Plus from "@/assets/icons/more.svg";
import Phone from "@/assets/images/cp-mobile.png";

const GridItems: {
  icon: string;
  label: string;
}[] = [
  {
    icon: Illness,
    label: "Illness",
  },
  {
    icon: Weather,
    label: "Weather",
  },
  {
    icon: Refundable,
    label: "Refundable Booking",
  },
  {
    icon: Emergency,
    label: "Emergency",
  },
  {
    icon: Breakdown,
    label: "Mechanical Breakdown",
  },
  {
    icon: Plus,
    label: "Plus much much more",
  },
];

export default function Cancellation() {
  return (
    <Container>
      <section className={styles.cancellation}>
        <div className={styles.top}>
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>Recommended</div>
          </div>
          <div className={styles.badgePadding}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.phone}>
            <Image src={Phone} alt="Cancellation Protection" />
          </div>
          <div className={styles.content}>
            <h3>Cancellation protection</h3>
            <p>
              During these uncertain times we recommend adding Cancellation
              Protection to your booking
            </p>
            <div className={styles.grid}>
              {GridItems.map((item, i) => (
                <div className={styles.gridItem} key={i}>
                  <Image src={item.icon} alt={item.label} />
                  <h4>{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
