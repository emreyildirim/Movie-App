
const Search = (props) =>
{
    return (
        <input className="search" 
               placeholder="Search" 
               onChange={props.onChange}/>
               
    );
};
export default Search;
