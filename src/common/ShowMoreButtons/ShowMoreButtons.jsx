import { FaAngleDown } from "react-icons/fa6";

import styles from './ShowMoreButtons.module.css'

const ShowMoreButtons = () => {
  return (
    <button className={styles.showMoreButtons}>
    <div> Mostrar mais eventos de Eliminatórias da Copa - América do Sul </div>
    <FaAngleDown/>
  </button>
  )
}

export default ShowMoreButtons