import Image from 'next/image';
import type { Work } from '@/types/work';

type Props = {
  work: Work;
};

export default function WorkPreview({ work }: Props) {
  return (
    <>
      <Image src={work.image} alt={work.title} width={500} height={350} loading="eager"/>

      <h2>{work.title}</h2>
      <p>{work.description}</p>
    </>
  );
}
