import { useRef, useState } from 'react';
import EqCardSingle from '../../components/EqCardSingle/EqCardSingle'
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
import { useFetch } from '../../hooks/useFetch/useFetch'
import eqCards from './EqCards.module.scss'

const EqCards = () => {
  const isLoading = useRef(true);
  const url = process.env.REACT_APP_URL
  const {data, loading, error} = useFetch(url, isLoading, [])

  const [filtered, setFiltered] = useState()

  const result = filtered ? filtered.map((eq,id) => (
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
  )) : data.map((eq,id) => (
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
  ))

  return (
    <>
    <Search 
    data={data} 
    setFiltered={setFiltered}/>
    <div className={eqCards.eqcards}>
        {loading ? <Loader/> : result}
    </div>
    </>
  )
}

export default EqCards