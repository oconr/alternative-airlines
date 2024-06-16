import styles from "@/styles/components/BNPL.module.scss";
import Container from "./Container";

import KlarnaLogo from "@/assets/images/logos/klarna.png";
import LaybuyLogo from "@/assets/images/logos/laybuy.png";
import AffirmLogo from "@/assets/images/logos/affirm.png";
import AfterPayLogo from "@/assets/images/logos/afterpay.png";
import PhoneImage from "@/assets/images/bnpl-mobile.png";
import Image from "next/image";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

export default function BNPL() {
  return (
    <Container>
      <section className={styles.bnpl}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3>Buy now, pay later</h3>
            <p>
              Book your flights today and spread the cost over time with one of
              our instalment options.
            </p>
            <ul>
              <li>
                <span>
                  <IconCheck size="1rem" />
                </span>
                <p>Make payments weekly or monthly</p>
              </li>
              <li>
                <span>
                  <IconCheck size="1rem" />
                </span>
                <p>Interest free options</p>
              </li>
              <li>
                <span>
                  <IconCheck size="1rem" />
                </span>
                <p>Fast approval</p>
              </li>
            </ul>
            <Link href="#">Browse payment methods</Link>
          </div>
          <div className={styles.background}>
            <Image className={styles.logo} src={KlarnaLogo} alt="Klarna logo" />
            <Image className={styles.logo} src={LaybuyLogo} alt="Laybuy logo" />
            <Image className={styles.logo} src={AffirmLogo} alt="Affirm logo" />
            <Image
              className={styles.logo}
              src={AfterPayLogo}
              alt="AfterPay logo"
            />
            <Image className={styles.phone} src={PhoneImage} alt="Phone" />
          </div>
        </div>
      </section>
    </Container>
  );
}
