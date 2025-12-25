import MovieRow from "./MovieRow";
import requests from "./api";

function App() {
  return (
    <>
      <header className="hero">
        <nav>
          <h1 className="logo">STREAMFLIX</h1>
        </nav>
        <div className="hero-content">
          <h2>Unlimited movies, shows and more</h2>
        </div>
      </header>

      <MovieRow title="Trending Now" fetchUrl={requests.trending} />
      <MovieRow title="Popular Movies" fetchUrl={requests.popular} />
      <MovieRow title="Top Rated" fetchUrl={requests.topRated} />
    </>
  );
}

export default App;
