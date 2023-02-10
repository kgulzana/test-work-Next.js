import Link from "next/link";
import styles from "../styles/A.module.css";

type LinkProps = {
  text: string;
  href: string;
};

export default function A({ text, href }: LinkProps) {
  return (
    <Link href={href}>
      <p className={styles.link}>{text}</p>
    </Link>
  );
}
