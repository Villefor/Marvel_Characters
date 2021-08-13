import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Character() {
  const [series, setSeries] = useState([]);

  console.log(series)

  const imgPath = '/standard_fantastic.';

  const getApi = () => {
    axios.get('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then((response) => setSeries(response.data.data.results));
  };

  useEffect(() => {
    getApi();
  },[series]);

  return (
    <section>
      {series.length > 0
        ? series.map((legacy) => (
          <section key={legacy.title}>
            <img src={legacy.thumbnail.path + imgPath + legacy.thumbnail.extension} alt="character" />
            <div>
              <h1>{legacy.title}</h1>
              <h3>{'finished on: ' + legacy.endYear}</h3>
              <h3>{legacy.rating}</h3>
              <h3>Comics available :</h3>
                <ul>
                    <li>{legacy.comics.available}</li>
                </ul>
            </div>
          </section>
        ))
        : <h1>loading</h1>
      }
    </section>
  );
}
