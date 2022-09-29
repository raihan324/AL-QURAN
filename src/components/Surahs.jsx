import React from 'react'
// import Surah from './Surah'

const Surahs = ({number, name, englishName, englishNameTranslation, revelationType, ayahs}) => {
  return (
    <div className="text__wrapper">
        <div className="style__number">
          <h3>{number}</h3>
          <h3>{englishName}</h3>
          <p>{englishNameTranslation}</p>
        </div>
        <div className="arby__ayat">
          <h3>{name}</h3>
          <p>{ayahs.length} Ayahs</p>
        </div>
    </div>
  )
}

export default Surahs