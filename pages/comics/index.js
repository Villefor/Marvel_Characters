import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import comicsLoad from '../../public/image/stan-comics.gif';

export default function Comics() {

  const [comics, setComics] = useState([]);

  const imgPath = '/standard_fantastic.';

  const getComics = () => {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=714773a3758165cb173dbad4825c0608&hash=b8c530295224fb1835c51ea6b7000b4b').then((response) => setComics(response.data.data.results));
  };

  useEffect(() => {
     getComics();
  }, [comics]);
  console.log(comics)
  return (
    <section>
      {comics.length > 0
        ? comics.map((comic) => (
          <section key={comic.id}>
            <img src={comic.thumbnail.path + imgPath + comic.thumbnail.extension} alt="comics" />
            <div>
              <h1>{comic.title}</h1>
              <h3>{'Number of pages : ' + comic.pageCount}</h3>
              <h3>Stories available :</h3>
                <ul>
                    <li>{'From Series: ' + comic.series.name }</li>
                    <li>{'Number of Stories: ' + comic.stories.available}</li>
                </ul>
              <img src={comic.images.path + imgPath + comic.images.extension} alt="story"/>
            </div>
          </section>
        ))
        : <Image src={comicsLoad} alt="loading" />
      }
    </section>
  );
}