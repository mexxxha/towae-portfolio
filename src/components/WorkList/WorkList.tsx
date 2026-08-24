import type { Work } from "@/types/work";

type Props = {
  works: Work[];
  onSelect: (work: Work) => void;
};

export default function WorkList({ works, onSelect }: Props) {
  return (
    <>
      {works.map((work) => (
        <button
          key={work.id}
          type="button"
          onClick={() => onSelect(work)}
        >
          {work.title}
        </button>
      ))}
    </>
  );
}