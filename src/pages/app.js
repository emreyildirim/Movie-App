
import Card from '../components/MovieCard/Card'
import Search from '../components/Search';
import SearchType from '../components/SearchType';
import SearchYear from '../components/SearchYear';
import Navbar from '../components/Navbar';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';


const App = ({store}) => {

    useEffect(() => {

        store.setSearchResults([]);
    }, [store.query.length < 3]);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=b85e1d74&s=' + store.query + '&y=' + store.year + '&type=' + store.type)
            .then((res) => res.json()
                .then((data) => {
                    store.setSearchResults(data.Search);
                    console.log(data.Search)
                    store.SearchResults !== undefined
                        ? store.SearchResults.map((item, index) => {
                            fetch('https://www.omdbapi.com/?apikey=b85e1d74&i=' + item.imdbID)
                                  .then((res) => res.json())
                                  .then((data) => {
                                      if (store.SearchResults !== undefined && store.SearchResults.length)
                                       {
                                          if (data.imdbRating !== 'N/A' && store.SearchResults[index])
                                           {
                                              store.SearchResults[index].imdbRating = data.imdbRating;
                                           }
                                          if (data.imdbRating === 'N/A' && store.SearchResults[index]) 
                                          {
                                              store.SearchResults[index].imdbRating = '';
                                          }
                                      }
                                      store.setSearchResults(store.SearchResults);
                                  });
                          })
                        : null;
                })
                .catch((err) => console.log(err))
        );
    }, [store.year,store.type,store.query]);

    const handleSearch = (e) => {
        store.query = e.target.value;
    };

    const handleYearChange = (e) => {
        store.year = e.target.value;
    };

    const handleTypeChange = (e) => {
        store.type = e.target.value;
    };

    return ( 
     <div>

        <Navbar />
            <div className="container">
                <div className="row mb-4 mt-3">
                    <div className="col-md-7">
                        <Search onChange={handleSearch} />
                    </div>
                    <div className="col-md-3">
                        <SearchYear onChange={handleYearChange} />
                    </div>
                    <div className="col-md-2">
                        <SearchType onChange={handleTypeChange} />
                    </div>
                </div>

                <div className="d-flex justify-content-center flex-row flex-wrap">
                    {store.SearchResults !== undefined ? (
                        store.SearchResults.map((item, index) => {
                            return <Card 
                            key={index}
                            id={item.imdbID} 
                            poster={item.Poster} 
                            title={item.Title}
                            rating={item.imdbRating} />;
                        })
                    ) : (
                        <div className="display-3 warning" >Arama Yapmalısın!</div>
                    )}
                </div>
            </div>


    </div>
    );
}
export default inject('store')(observer(App));
