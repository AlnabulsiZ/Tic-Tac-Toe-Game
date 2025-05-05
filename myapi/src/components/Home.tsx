import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; {/* للتنقل من خلال الكود */}

const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/movies/animation');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      if (err instanceof Error) {
        setData(err.message);
      } else {
        console.error('Unknown error', err);
        setData('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {Array.isArray(data) ? (
          data.map((movie: any, index: number) => (
            <div
              key={index}
              style={{
                width: '200px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                backgroundColor: '#2c3e50',
              }}
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={movie.posterURL || movie.imageUrl}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ummahat.net/wp-content/uploads/2020/12/%D8%A3%D9%81%D9%84%D8%A7%D9%85-%D9%83%D8%B1%D8%AA%D9%88%D9%86-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D9%85%D9%86-%D8%B9%D9%85%D8%B1-%D8%B3%D9%86%D8%AA%D9%8A%D9%86-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-3-870x563.jpeg';
                }}
              />
              <div style={{ padding: '10px', color: '#fff' }}>
                <h3 style={{ fontSize: '16px', margin: '0', marginBottom: '5px' }}>{movie.title}</h3>
                <h4 style={{ fontSize: '14px', margin: '0', marginBottom: '5px' }}>{movie.year}</h4>
               
                <a
                  href={`https://www.imdb.com/title/${movie.imdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#f39c12', textDecoration: 'none', fontSize: '14px' }}
                >
                IMDB
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>{data || 'Loading...'}</p>
        )}
      </div>
    </>
  );
};

export default Home;
