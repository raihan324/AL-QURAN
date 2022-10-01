import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Surahs.module.css'
// import Surah from './Surah'

const Surahs = ({number, name, englishName, englishNameTranslation, revelationType, ayahs}) => {
  console.log(ayahs)
  return (
    <Link to={`/surah/${number}`} state={{ayahs}} >
      <div className={classes.text__wrapper}>
        <div className={classes.style__number}>
          <span>
            <h3>{number}</h3>
          </span>
          <div>
            <p></p>
            <h3>{englishName}</h3>
            <p>{englishNameTranslation}</p>
          </div>
        </div>
        <div className={classes.arby__ayat}>
          <h3>{name}</h3>
          <p>{ayahs.length} Ayahs</p>
        </div>
      </div>
    </Link>
  )
}

export default Surahs