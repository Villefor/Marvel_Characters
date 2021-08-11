import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Marvel() {
  const [post, setPost] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  console.log(post);

  const imgPath = '/standard_fantastic.';

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then((response) => setPost(response.data.data.results));
  }, []);

  return (
    <section>
      <input type="text" />
      <select onChange={(e) => handle(e, setComp)}>
        <option value="Name">Name</option>
        <option value="Comics">Comics</option>
        <option value="Stories">Stories</option>
      </select>
      {post.length > 0
        ? post.map((heroes) => (
          <section id="characters" key={heroes}>
            <img className="imgCard" src={heroes.thumbnail.path + imgPath + heroes.thumbnail.extension} alt="character" />
            <div>
              <h1>{heroes.name}</h1>
            </div>
          </section>
        ))
        : <h1>Loading</h1>}
    </section>
  );
}
