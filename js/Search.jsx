import React from 'react';
// import preload data from data.json
import preload from '../data.json';

// we can stick the following inside the Search component to see all of the data in data.json:
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>

const Search = () =>
  <div className="search">
    {preload.shows.map(show => <h3>{show.title}</h3>)}
  </div>;

export default Search;
