import { useRef } from 'react';
import EqCardSingle from '../../components/EqCardSingle/EqCardSingle'
import { useFetch } from '../../hooks/useFetch/useFetch'
import './EqCards.scss'

const EqCards = () => {
  const isLoading = useRef(true);
  const url = process.env.REACT_APP_URL
  const {data, loading, error} = useFetch(url, isLoading, [])

  return (
    <div className='eqcards'>
        {data.map((eq,id) => (
          <EqCardSingle
          city={eq.city}
          date={eq.date}
          time={eq.time}
          latitude={eq.latitude}
          longitude={eq.longitude}
          depth={eq.depth}
          magnitude={eq.magnitude}
          place={eq.place}
          key={id}
          />
        ))}
    </div>
  )
}

export default EqCards