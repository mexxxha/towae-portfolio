import styles from './Window.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Window({ title, children }: Props) {
  return (
    <section className={styles.window}>
      <header className={styles.titleBar}>
        {title}
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
