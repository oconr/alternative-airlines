"use client";
import styles from "@/styles/components/Input.module.scss";
import { DatePicker } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";

export default function DateInput() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [nights, setNights] = useState(0);

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

  function calcNights(start: Date, end: Date) {
    const diff = end.getTime() - start.getTime();
    const dayDiff = diff / (1000 * 60 * 60 * 24);

    setNights(dayDiff);
    return;
  }

  useEffect(() => {
    if (!value[0] || !value[1]) {
      setNights(0);
      return;
    }

    calcNights(value[0], value[1]);
    return;
  }, [value]);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
  };

  return (
    <div className={styles.dates} ref={ref}>
      <div
        className={`${styles.label} ${
          value[0] || value[1] ? styles.active : ""
        }`}
        onClick={toggleDropdown}
      >
        <label>Dates</label>
        {value[0] && value[1] && (
          <label>
            {nights} {nights === 1 ? "Night" : "Nights"}
          </label>
        )}
      </div>
      <span
        className={value[0] || value[1] ? styles.active : ""}
        onClick={toggleDropdown}
      >
        {value[0] && value[0].toLocaleDateString(undefined, dateOptions)}
        {value[0] && value[1] && " - "}
        {value[1] && value[1].toLocaleDateString(undefined, dateOptions)}
      </span>
      <div className={`${styles.dropdown} ${open ? styles.active : ""}`}>
        <DatePicker
          type="range"
          value={value}
          onChange={setValue}
          maxLevel="month"
        />
      </div>
    </div>
  );
}
