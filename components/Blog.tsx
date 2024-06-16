import styles from "@/styles/components/Blog.module.scss";
import Image, { StaticImageData } from "next/image";

import ArticleOne from "@/assets/images/blog/article-one.jpg";
import ArticleTwo from "@/assets/images/blog/article-two.jpg";
import ArticleThree from "@/assets/images/blog/article-three.jpg";
import Container from "./Container";
import Link from "next/link";

const posts: PostProps[] = [
  {
    title:
      "The most beautiful locations around the world that you cannot afford miss out on.",
    image: ArticleOne,
    tag: "Destinations",
  },
  {
    title: "What to take with you for the ultimate European road trip weekend.",
    image: ArticleTwo,
    tag: "Travel tips",
  },
  {
    title: "Popular destinations with no travel restrictions or quarantine.",
    image: ArticleThree,
    tag: "Travel advice",
  },
];

export default function Blog() {
  return (
    <section className={styles.blog}>
      <Container>
        <h4>Blog</h4>
        <h3>Alternative adventures</h3>
      </Container>
      <div className={styles.scroll}>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
        {posts.map((post, i) => (
          <Post key={posts.length + i} {...post} />
        ))}
        {posts.map((post, i) => (
          <Post key={posts.length * 2 + i} {...post} />
        ))}
      </div>
    </section>
  );
}

type PostProps = {
  title: string;
  image: StaticImageData;
  tag: string;
};

function Post({ title, image, tag }: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <span>{tag}</span>
        <h5>{title}</h5>
        <div className={styles.spacer} />
        <Link href="#">Read blog article</Link>
      </div>
    </div>
  );
}
