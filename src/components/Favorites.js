import { useEffect,Fragment} from 'react';
import { inject,observer } from 'mobx-react';
import Card from './MovieCard/Card';

const Favorites = ({ store }) => {
    let FavoritesArray = [];


    useEffect(() => {
        FavoritesArray = JSON.parse(localStorage.getItem('favorites'));
        store.setFavorites(FavoritesArray);
    }, []);

    return (
        
        <Fragment>
            {store.favorites.length > 0 ? (
                store.favorites.map((item) => {
                    return <Card 
                    key={item.id} 
                    id={item.id} 
                    poster={item.poster} 
                    title={item.title}
                    rating={item.rating}/>;
                })
            ) : (
                <div className="display-3 warning" >Favorilerim Listen Boş!</div>
            )}
        </Fragment>
    );
};

export default inject('store')(observer(Favorites));
