import styles from "./EventGroup.module.css";
import { FaTv, FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";

const agruparPorCampeonato = (events) => {
  return events.reduce((grupos, evento) => {
    const campeonato = evento.campeonato.toString();
    if (!grupos[campeonato]) {
      grupos[campeonato] = [];
    }
    grupos[campeonato].push(evento);
    return grupos;
  }, {});
};

const EventGroup = ({ events = []}) => {
  const eventosAgrupados = agruparPorCampeonato(events);

  function abreviarTexto(texto, limite) {
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  }

  return (
    <div>
      {Object.keys(eventosAgrupados).map((campeonato) => (
        <>
        <a className={styles.containerTitle}>
        <span className={styles.campeonatoTitle}>{campeonato}</span>
        <FaArrowRight/>
        </a>
        <div key={campeonato} className={styles.campeonatoSection}>
          {eventosAgrupados[campeonato].map((event) => (
            <article key={event.id} className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.infos}>
                  <span className={styles.rodada}>{event.rodada} •</span>
                  <span className={styles.fase}>
                    {abreviarTexto(event.fase, 4)}
                  </span>
                  <span className={styles.data}>{event.data} •</span>
                  <span className={styles.horario}>{event.horario}</span>
                  <span className={styles.fiquePorDentro}>
                    Fique por dentro
                  </span>
                </div>
                <div className={styles.matches}>
                  <img
                    src={event.time1.bandeira}
                    alt={`Bandeira de ${event.time1.nome}`}
                  />
                  <span>{event.time1.nome}</span>
                </div>
                <div className={styles.matches}>
                  <img
                    src={event.time2.bandeira}
                    alt={`Bandeira de ${event.time2.nome}`}
                  />
                  <span>{event.time2.nome}</span>
                </div>
              </div>
              <button className={styles.ondeAssistir}>
                <span>
                  <FaTv /> Onde assistir?
                </span>
              </button>
            </article>
          ))}
        </div>
        </>))}
    </div>
  );
};
// Definindo PropTypes para o componente EventGroup
EventGroup.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rodada: PropTypes.string,
      fase: PropTypes.string,
      data: PropTypes.string,
      horario: PropTypes.string,
      time1: PropTypes.shape({
        nome: PropTypes.string,
        bandeira: PropTypes.string,
      }),
      time2: PropTypes.shape({
        nome: PropTypes.string,
        bandeira: PropTypes.string,
      }),
    })
  ),
};

export default EventGroup;
