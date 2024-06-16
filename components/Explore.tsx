import styles from "@/styles/components/Explore.module.scss";
import Container from "./Container";
import Image, { StaticImageData } from "next/image";

import SydneyImage from "@/assets/images/destinations/sydney.jpg";
import MelbourneImage from "@/assets/images/destinations/melbourne.jpg";
import BrisbaneImage from "@/assets/images/destinations/brisbane.jpg";
import GoldCoastImage from "@/assets/images/destinations/gold-coast.jpg";
import CairnsImage from "@/assets/images/destinations/cairns.jpg";
import UluruImage from "@/assets/images/destinations/uluru.jpg";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

const locations: LocationProps[] = [
  {
    city: "Sydney",
    country: "Australia",
    image: SydneyImage,
  },
  {
    city: "Melbourne",
    country: "Australia",
    image: MelbourneImage,
  },
  {
    city: "Brisbane",
    country: "Australia",
    image: BrisbaneImage,
  },
  {
    city: "Gold Coast",
    country: "Australia",
    image: GoldCoastImage,
  },
  {
    city: "Cairns",
    country: "Australia",
    image: CairnsImage,
  },
  {
    city: "Uluru",
    country: "Australia",
    image: UluruImage,
  },
];

export default function Explore() {
  return (
    <section className={styles.explore}>
      <Container>
        <h3>Exploring Australia</h3>
      </Container>
      <div className={styles.scroll}>
        {locations.map((location, i) => (
          <Location key={i} {...location} />
        ))}
      </div>
    </section>
  );
}

type LocationProps = {
  city: string;
  country: string;
  image: StaticImageData;
};

function Location({ city, country, image }: LocationProps) {
  return (
    <div className={styles.location}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={`${city}, ${country}`} />
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <h4>{city}</h4>
          <p>{country}</p>
        </div>
        <Link href="#">
          <IconChevronRight size="1rem" />
        </Link>
      </div>
    </div>
  );
}
