import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'

const FavButton = (props) => {
    const [isFavorite, setIsFavorite] = useState();

    let FavoritesArray = [];
    
    useEffect(() => {
        if (localStorage.getItem('favorites') !== null) {
            FavoritesArray = localStorage.getItem('favorites');
            if (FavoritesArray.includes(props.obj.id)) {
                setIsFavorite(true);
            }
        }
    }, [FavoritesArray]);

    const handleClick = () => {
        if (localStorage.getItem('favorites') == null) 
        {
            FavoritesArray = [props.obj];
            localStorage.setItem('favorites', JSON.stringify(FavoritesArray));
            setIsFavorite(true);
        } 
        else if (!localStorage.getItem('favorites').includes(props.obj.id)) 
        {
            let favorite = JSON.parse(localStorage.getItem('favorites'));
            FavoritesArray = favorite;
            FavoritesArray.push(props.obj);
            localStorage.setItem('favorites', JSON.stringify(FavoritesArray));
            setIsFavorite(true);
        } 
        else 
        {
            let favorite = JSON.parse(localStorage.getItem('favorites'));
            FavoritesArray = favorite;
            FavoritesArray.map((item, index) => {

                if (item.id === props.obj.id)
                {
                    FavoritesArray.splice(index, 1);
                }

            });
            localStorage.setItem('favorites', JSON.stringify(FavoritesArray));
            setIsFavorite(false);
        }
    };
    return (
        <div className="fav">
        <i onClick={handleClick}>
        {isFavorite ?
         <FontAwesomeIcon icon={faStarSolid} color="yellow" size="xs" /> 
        : 
        <FontAwesomeIcon icon={faStarRegular} color="yellow" size="xs"  />}  
        </i>
        </div>
    );


}
export default FavButton;