// import Image from "next/image";
import Desktop from '@/components/Desktop/Desktop';
import Folder from "@/components/Folder/Folder";
import Taskbar from '@/components/Taskbar/Taskbar';
import Window from "@/components/Windows/Window";
import WorksExplorer from '@/components/WorksExplorer/WorksExplorer';

export default function Home() {
  return (
    <Desktop>
      <Folder label="Works" />
      <Window title="Works">
        <WorksExplorer />
      </Window>
      <Taskbar />
    </Desktop>
  );
}
