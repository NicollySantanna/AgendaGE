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

  function abreviarTexto(texto, limite) {
    if(texto.length > limite) {
      return texto.slice(0, limite) + "..."
    }
    return texto
  }

  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <article key={event.id} className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.infos}>
                <span className={styles.rodada}>{event.rodada}•</span>
                <span className={styles.fase}> {abreviarTexto(event.fase, 4)}</span>
                <span className={styles.data}>{event.data} •</span>
                <span className={styles.horario}>{event.horario} </span>
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
