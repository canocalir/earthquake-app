import './EqCardSingle.scss'

const EqCardSingle = ({
    date, 
    time, 
    latitude, 
    longitude, 
    depth, 
    magnitude, 
    place,
    city
}) => {
  return (
    <div className='single-eq-card'>
        <p>{city}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>
        <p>{magnitude}</p>
        <p>{depth}</p>
        <p>{place}</p>
    </div>
  )
}

export default EqCardSingle