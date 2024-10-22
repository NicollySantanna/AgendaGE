import styles from './ChampionshipName.module.css'
import { FaAngleRight } from "react-icons/fa";

import { useEffect, useState } from 'react';

import { championshipName } from "../mockEvents";

const ChampionshipName = () => {

    const [championName, setChampionName] = useState([]);
  
    // Simulação de requisição de API
    useEffect(() => {
      setTimeout(() => {
        setChampionName(championshipName); 
      }, 1000); 
    }, []);
    
  
  return (
    <div className={styles.container}>
        <a href="#">
           {championName.length > 0 ? (
            <>
            {championName[0].champion}
            <FaAngleRight/>
            </>
           ): "Carregando..."
           
           }
        </a>
    </div>
  )
}
export default ChampionshipName