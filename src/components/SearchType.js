
const SearchType = (props) => {
    return (

        <select className="search-type" onChange={props.onChange}>
            <option value="movie">Select Type</option>
            <option value="movie">Series</option>
            <option value="series">Movie</option>
        </select>

    );
};

export default SearchType;