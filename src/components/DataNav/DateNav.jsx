import styles from "./DateNav.module.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const DateNav = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedData, setSelectedDate] = useState(new Date());
  const [datesRange, setDatesRange] = useState([]);

  // Função para criar o intervalo de datas (7 dias passados, 7 dias futuros)
  const getDatesRange = (centerDate) => {
    const dates = [];
    for (let i = -7; i <= 7; i++) {
      const newDate = new Date(centerDate);
      newDate.setDate(centerDate.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };
  // Atualiza o intervalo de datas ao carregar o componente ou quando a data muda
  useEffect(() => {
    setDatesRange(getDatesRange(currentDate));
  }, [currentDate]);

  // Função para mudar a data selecionada
  const handleDateClick = (date) => {
    setSelectedDate(date);
    // adicionar a lógica para carregar os dados desse dia
    console.log("Carregar eventos para a data:", date);
  };

  // Função para mover o intervalo de datas para frente ou para trás
  const handleNavigation = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setDate(currentDate.getDate() - 1); //Voltar 1 dia
    } else if (direction === "next") {
      newDate.setDate(currentDate.getDate() + 1); //Avancar 1 dia
    }
    setCurrentDate(newDate);
    setSelectedDate(newDate)
  };

  return (
    <div className={styles.dateNav}>
      <div className={styles.dateNavBarWrapper}>
        {`${new Date().toLocaleDateString("pt-BR", {
          month: "long",
        })} • ${new Date().toLocaleDateString("pt-BR", { year: "numeric" })}`}
      </div>
      <section className={styles.dateNavBar}>
        <span>
          <button
            className={styles.arrows}
            onClick={() => handleNavigation("prev")}
          >
            <FaAngleLeft />
          </button>
        </span>
        {datesRange.map((date) => (
          <div
            key={date.toDateString()}
            className={`${styles.date} ${
              date.toDateString() === selectedData.toDateString()
                ? styles.selected
                : ""
            } ${
              date.toDateString() === new Date().toDateString()
                ? styles.today
                : ""
            } `}
            onClick={() => handleDateClick(date)}
          >
            <span className={styles.number}>{date.getDate()}</span>

            <span className={styles.weekday}>
              {date.toDateString() === new Date().toDateString() ? (
                <p className={styles.currentDay}>{"hoje"}</p>
              ) : (
                date.toLocaleDateString("pt-BR", { weekday: "short" })
              )}
            </span>
          </div>
        ))}
        <span>
          <button
            className={styles.arrows}
            onClick={() => handleNavigation("next")}
          >
            <FaAngleRight />
          </button>
        </span>
      </section>
    </div>
  );
};

export default DateNav;
