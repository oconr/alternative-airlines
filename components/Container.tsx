import styles from "@/styles/components/Container.module.scss";

type ContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
