import styles from "@/styles/components/Features.module.scss";
import Container from "@/components/Container";
import Image from "next/image";

import SearchIcon from "@/assets/icons/search.svg";
import ChoiceIcon from "@/assets/icons/choice.svg";
import ServiceIcon from "@/assets/icons/service.svg";

const features: FeatureProps[] = [
  {
    title: "Simple search",
    description: "Easily search and book flights from anywhere in the world",
    icon: SearchIcon,
  },
  {
    title: "Unlimited choice",
    description: "Find the flight you were looking for and pay on your terms",
    icon: ChoiceIcon,
  },
  {
    title: "Expert customer service",
    description: "Dedicated customer support team once you have booked",
    icon: ServiceIcon,
  },
];

export default function Features() {
  return (
    <Container>
      <section className={styles.features}>
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </section>
    </Container>
  );
}

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className={styles.feature}>
      <Image src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
