import { useState } from "react";
import styles from "./TabNavigation.module.css";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("futebol");

  return (
    <nav className={styles.container}>
      <ul>
        <li className={styles.dataActiveTab}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "futebol" ? styles.active : ""
            }`}
            onClick={() => setActiveTab('futebol')}
          > Futebol</button>
        </li>
        <li className={styles.dataActiveTab}>
        <button
            className={`${styles.tabButton} ${
              activeTab === "maisEsportes" ? styles.active : ""
            }`}
            onClick={() => setActiveTab('maisEsportes')}
          >Mais Esportes</button>
        </li>
      </ul>
    </nav>
  );
};

export default TabNavigation;
