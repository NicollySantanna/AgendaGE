import { useEffect, useState } from "react";
import styles from "./TabNavigation.module.css";

import EventGroup from "../EventGroup/EventGroup";

import {basquete, nfl, mockEvents } from "../mockEvents";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("futebol");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        if (activeTab === "futebol") {
          setEvents(mockEvents);
        } else if (activeTab === "maisEsportes") {
          const sportsEvents = [
            { esporte: 'Basquete', eventos: basquete },
            { esporte: 'NFL', eventos: nfl },
          ];
          setEvents(sportsEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [activeTab]);

  return (
    <>
      <nav className={styles.container}>
        <ul>
          <li key={events.id} className={styles.dataActiveTab}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "futebol" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("futebol")}
            >
              Futebol
            </button>
          </li>
          <li className={styles.dataActiveTab}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "maisEsportes" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("maisEsportes")}
            >
              Mais Esportes
            </button>
          </li>
        </ul>
      </nav>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <EventGroup events={events}/>
      )}
    </>
  );
};

export default TabNavigation;
