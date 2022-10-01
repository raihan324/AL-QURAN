import { useLocation, /*useParams*/ } from "react-router-dom"

const Surah = () => {
  const location = useLocation()
  const {state} = location
  const {ayahs} = state
  // const {id} = useParams()
  console.log(ayahs)
  return (
    <div className="container">
      <div className="ayahs__container">
        {
          ayahs.map((ayah) => {
            return <h1 key={ayah.number}>{`${ayah.number} ${ayah.text}`}</h1>
          })
        }
      </div>
    </div>
  )
}

export default Surah