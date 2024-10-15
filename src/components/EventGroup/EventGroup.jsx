import styles from "./EventGroup.module.css";
import { FaTv } from "react-icons/fa6";
import { useState, useEffect } from "react";

import { mockEvents } from '../mockEvents'

const EventGroup = () => {
  const [events, setEvents] = useState([]);

  // Simulação de requisição de API
  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents); 
    }, 1000); 
  }, []);

  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <article key={event.id} className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.infos}>
                <span>{event.rodada}</span>
                <span>{event.fase}</span>
                <span>{event.data}</span>
                <span>{event.horario}</span>
                <span className={styles.fiquePorDentro}>Fique por dentro</span>
              </div>
              <div className={styles.matches}>
                <img src={event.time1.bandeira} alt={`Bandeira de ${event.time1.nome}`} />
                <span>{event.time1.nome}</span>
              </div>
              <div className={styles.matches}>
                <img src={event.time2.bandeira} alt={`Bandeira de ${event.time2.nome}`} />
                <span>{event.time2.nome}</span>
              </div>
            </div>
            <button className={styles.ondeAssistir}>
              <span>
                <FaTv /> Onde assistir?
              </span>
            </button>
          </article>
        ))
      ) : (
        <p>Carregando eventos...</p>
      )}
    </>
  );
};

export default EventGroup;
