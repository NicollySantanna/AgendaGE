import styles from './ChampionshipName.module.css'
import { FaAngleRight } from "react-icons/fa";



const ChampionshipName = () => {
  return (
    <div className={styles.container}>
        <a href="#">
            Eliminiatórias da Copa
            <FaAngleRight/>
        </a>
    </div>
  )
}

export default ChampionshipName