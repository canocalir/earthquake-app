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

let magColorStyle =  {};

if(Number(magnitude) <= 2){
  magColorStyle = {
    backgroundColor: 'green'
  }
}else if(Number(magnitude) <= 3){
  magColorStyle = {
    backgroundColor: '#e4cf43',
  }
}else if(Number(magnitude) <= 4){
  magColorStyle = {
    backgroundColor: '#ff831d'
  }
}else{
  magColorStyle = {
    backgroundColor: 'red'
  }
}

  return (
    <div className='eq-card-container'>
      <div className="eq-card">
      <div style={magColorStyle} className="mag-container">
        <p className='magnitude'><span className='mag-span'>Mag</span>{magnitude}</p>
        <div className="city-container">
        <p>{city.slice(1,-1)}</p>
        </div>
        </div>
        <div className="eq-details">
        <p>{date}</p>
        <p>{time}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>
        <p>{depth}</p>
        <p>{place}</p>
        </div>
      </div>
    </div>
  )
}

export default EqCardSingle