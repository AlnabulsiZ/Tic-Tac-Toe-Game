import { useParams } from 'react-router-dom'; {/* تُستخدم لقراءة المعاملات (parameters) من الرابط*/}
import { useState, useEffect } from 'react';

const Film: React.FC = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await fetch(`https://api.sampleapis.com/movies/animation/${movieId}`);
      const json = await resp.json();
      setMovie(json);
    };
    
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <div style={{ height: '100px' }}></div>
      {movie ? (
        <div>
          <h1 style={{color:'white'}}>{movie.title}</h1>
          <img src={movie.posterURL || movie.imageUrl} alt={movie.title} />
          <p>{movie.year}</p>
          <p>{movie.description}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Film;
