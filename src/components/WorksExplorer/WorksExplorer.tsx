'use client';

import { works } from '@/data/works';
import { useState } from 'react';
import WorkList from '@/components/WorkList/WorkList';
import WorkPreview from '../WorkPreview/WorkPreview';
import styles from './WorksExplorer.module.css';

export default function WorksExplorer() {
  const [selectedWork, setSelectedWork] = useState(works[0]);
  return (
    <div className={styles.explorer}>
      <aside className={styles.sidebar}>
        <h2>[イラスト]</h2>
        <WorkList works={works.filter((work) => work.category === 'イラスト')} onSelect={setSelectedWork} />

        <h2>[動画]</h2>
        <WorkList works={works.filter((work) => work.category === '動画')} onSelect={setSelectedWork} />
      </aside>

      <div className={styles.worksArea}>
        <WorkPreview work={selectedWork} />
      </div>
    </div>
  );
}
