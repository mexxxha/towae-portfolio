import Image from 'next/image';
import styles from './Folder.module.css';

type Props = {
  label: string;
};

export default function Folder({ label }: Props) {
  return (
    <button className={styles.folder}>
      <Image className={styles.icon} src="/images/icons/folder.png" alt="" width={48} height={48} loading="eager" />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
