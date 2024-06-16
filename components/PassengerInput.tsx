"use client";

import styles from "@/styles/components/Input.module.scss";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

type ClassType = {
  value: string;
  label: string;
};

const Classes: ClassType[] = [
  {
    value: "economy",
    label: "Economy",
  },
  {
    value: "premium-economy",
    label: "Premium Economy",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "first",
    label: "First",
  },
];

export default function PassengerInput() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [flightClass, setClass] = useState<ClassType[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  function toggleDropdown() {
    setOpen(!open);
  }

  function toggleClass(c: ClassType) {
    if (flightClass.includes(c)) {
      setClass(flightClass.filter((cl) => cl !== c));
      return;
    }

    setClass([...flightClass, c]);
  }

  return (
    <div className={styles.passengers} ref={ref}>
      <div
        className={`${styles.label} ${
          adults > 0 || children > 0 || flightClass.length > 0
            ? styles.active
            : ""
        }`}
        onClick={toggleDropdown}
      >
        <label>Passengers</label>
      </div>
      <span
        className={
          adults > 0 || children > 0 || flightClass.length > 0
            ? styles.active
            : ""
        }
      >
        {adults > 0 && `${adults} ${adults === 1 ? "Adult" : "Adults"}`}
        {adults > 0 && (children > 0 || flightClass.length > 0) && ", "}
        {children > 0 && `${children} ${children === 1 ? "Child" : "Children"}`}
        {children > 0 && flightClass.length > 0 && ", "}
        {flightClass.length > 0 &&
          flightClass.length < Classes.length &&
          flightClass.map((c) => c.label).join("/")}
        {flightClass.length === Classes.length && "Any class"}
      </span>
      <div className={`${styles.dropdown} ${open ? styles.active : ""}`}>
        <div className={styles.row}>
          <div
            className={styles.button}
            onClick={() => setAdults(adults < 1 ? 0 : adults - 1)}
          >
            <IconMinus size="1rem" />
          </div>
          <p>
            {adults} {adults === 1 ? "adult" : "adults"}
          </p>
          <div className={styles.button} onClick={() => setAdults(adults + 1)}>
            <IconPlus size="1rem" />
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={styles.button}
            onClick={() => setChildren(children < 1 ? 0 : children - 1)}
          >
            <IconMinus size="1rem" />
          </div>
          <p>
            {children} {children === 1 ? "child" : "children"}
          </p>
          <div
            className={styles.button}
            onClick={() => setChildren(children + 1)}
          >
            <IconPlus size="1rem" />
          </div>
        </div>
        <div className={styles.row}>
          {Classes.map((c) => (
            <div
              className={`${styles.badge} ${
                flightClass.includes(c) ? styles.active : ""
              }`}
              onClick={() => toggleClass(c)}
              key={c.value}
            >
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
