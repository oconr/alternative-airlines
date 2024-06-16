import BNPL from "@/components/BNPL";
import Blog from "@/components/Blog";
import Cancellation from "@/components/Cancellation";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import styles from "@/styles/home.module.scss";

export default async function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Features />
      <BNPL />
      <Explore />
      <Cancellation />
      <Blog />
    </main>
  );
}
