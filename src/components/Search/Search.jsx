import searchStyle from './Search.module.scss'

const Search = ({ data, setFiltered }) => {

    const onChangeHandler = (e) => {

        let filtered = data.filter((fdata) => (
           fdata.city.toLowerCase().slice(1,-1).indexOf(e.target.value.toLowerCase()) > -1 ))  

            setFiltered(filtered)
    }
  return (
    <div className={searchStyle.searchContainer}>
        <input
        onChange={onChangeHandler} 
        className={searchStyle.searchInput} type="text" 
        placeholder='Enter a City' />
    </div>
  )
}

export default Search