import type { Metadata } from 'next';
import { DotGothic16 } from "next/font/google";
import './reset.css';
import './globals.css';

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'らくね',
  description: 'らくねのポートフォリオ',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ja" className={dotGothic16.className}>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
