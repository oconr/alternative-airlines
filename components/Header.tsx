"use client";
import { useState } from "react";
import Image from "next/image";

import { IconChevronDown, IconX, IconMenu2 } from "@tabler/icons-react";

import styles from "@/styles/components/Header.module.scss";
import Logo from "@/assets/images/logos/alternative-airlines.jpg";
import Link from "next/link";
import Container from "./Container";

type NavigationItem = {
  label?: string;
  href?: string;
  children?: NavigationItem[];
};

const navItems: NavigationItem[] = [
  {
    label: "Book flights",
    children: [],
  },
  {
    label: "Information",
    children: [],
  },
  {
    label: "Help",
    children: [],
  },
  {
    label: "Travel Agents",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${menuOpen && styles.active}`}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <Image
              src={Logo}
              alt="Alternative Airlines"
              className={styles.logo}
            />
            <button onClick={toggleMenu}>
              {menuOpen ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
          <nav>
            <ul>
              {navItems.map((item, i) => (
                <NavItem key={i} item={item} />
              ))}
            </ul>
            <ul>
              <li>Manage booking</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

type NavItemProps = {
  item: NavigationItem;
};

function NavItem({ item }: NavItemProps) {
  if (item.href) {
    return (
      <Link href={item.href}>
        <li>
          {item.label}
          {item.children && <IconChevronDown size="1rem" />}
        </li>
      </Link>
    );
  }

  return (
    <li>
      {item.label}
      {item.children && <IconChevronDown size="1rem" />}
    </li>
  );
}
