import styles from "./App.module.css";

import EventGroup from "./components/EventGroup/EventGroup";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import DateNav from "./components/DataNav/DateNav";

function App() {
  return (

    <main className={styles.container}>
      <header className={styles.header}>
        <h1>AGENDA DE FUTEBOL E MAIS ESPORTES</h1>
        <p>
          Acompanhe jogos, eventos e resultados do esporte nacional e
          internacional. Eventos no Horário de Brasília
        </p>
      </header>

      <DateNav/>
      
      <TabNavigation />

      <section className={styles.gameTrack}>
        <EventGroup />
      </section>

      {/* <aside className={styles.showMoreContainer}>
        <ShowMoreButtons />
      </aside> */}

    </main>
  );
}

export default App;
