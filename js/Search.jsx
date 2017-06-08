import React from 'react';
// import preload data from data.json
import preload from '../data.json';

// we can stick the following inside the Search component to see all of the data in data.json:
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>

const Search = () =>
  <div className="search">
    {preload.shows.map(show =>
      <div className="show-card">
        <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    )}
  </div>;

export default Search;
