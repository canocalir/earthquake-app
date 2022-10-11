import searchStyle from './Search.module.scss'

const Search = ({ data, setFiltered }) => {

    const onChangeHandler = (e) => {
        let filtered = data.filter((fdata) => (
            fdata.city.slice(1,-1).toLowerCase().indexOf(e.target.value) > -1))
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