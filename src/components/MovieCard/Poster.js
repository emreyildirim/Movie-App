

const Poster = (props) => {
    const noPoster = (e) => {
        e.target.src = 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';
    };
    return <img
        src={props.src}
        className="poster"
        alt="moviePoster"
        onError={noPoster} />;
};

export default Poster;
