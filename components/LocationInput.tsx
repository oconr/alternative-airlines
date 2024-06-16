"use client";
import styles from "@/styles/components/Input.module.scss";
import { useEffect, useRef, useState } from "react";
import { IconSwitchHorizontal } from "@tabler/icons-react";

const allCountries = ["London (LON)", "Sydney (SYD)"];

export default function LocationInput() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSwitch() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className={styles.location}>
      <Input
        options={allCountries}
        value={from}
        onChange={setFrom}
        label="Where from?"
      />
      <div className={styles.switcher} onClick={handleSwitch}>
        <IconSwitchHorizontal size="1.1rem" />
      </div>
      <Input
        options={allCountries}
        value={to}
        onChange={setTo}
        label="Where to?"
      />
    </div>
  );
}

type InputProps = {
  options: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
};

function Input({ options, value, onChange, label }: InputProps) {
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

  function handleChange(option: string) {
    onChange(option);
    setOpen(false);
  }

  return (
    <div className={styles.input} ref={ref}>
      <label
        className={value && value !== "" ? styles.active : ""}
        onClick={toggleDropdown}
      >
        {label}
      </label>
      <span
        className={value && value !== "" ? styles.active : ""}
        onClick={toggleDropdown}
      >
        {value}
      </span>
      <div className={`${styles.dropdown} ${open ? styles.active : ""}`}>
        {(!options || options.length === 0) && <p>No options</p>}
        {options && options.length > 0 && (
          <ul>
            {options.map((option, i) => (
              <li key={i} onClick={() => handleChange(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
