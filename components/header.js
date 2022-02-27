import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.title}>新闻头条</div>
        <div className={styles.subtitle}>https://next.cwjbjy.online</div>
      </div>
    </header>
  );
}
