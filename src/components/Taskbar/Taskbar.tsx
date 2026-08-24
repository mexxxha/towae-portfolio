"use client";

import { useState, useEffect } from "react";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("ja-JP", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={styles.taskbar}>
      <button className={styles.startButton}>Start</button>
      <div className={styles.spacer} />
      <div className={styles.clock}>{time}</div>
    </footer>
  );
}