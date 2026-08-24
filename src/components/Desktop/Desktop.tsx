import Image from 'next/image';
import styles from './Desktop.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function Desktop({ children }: Props) {
  return (
    <main className={styles.desktop}>
      <Image
      className={styles.background}
        src="/images/background.jpg"
        alt=""
        fill
        sizes="100vw" />
      <div className={styles.content}>{children}</div>
    </main>
  );
}