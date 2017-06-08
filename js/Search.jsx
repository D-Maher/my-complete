import React from 'react';
import ShowCard from './ShowCard';
// import preload data from data.json
import preload from '../data.json';

// we can stick the following inside the Search component to see all of the data in data.json:
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>

const Search = () =>
  <div className="search">
    {/* the 'show' that comes right after 'ShowCard' is part of props */}
    {preload.shows.map(show => <ShowCard show={show} />)}
  </div>;

export default Search;
