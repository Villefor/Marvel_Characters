import React, { useState, useEffect, useContext } from 'react';
import { MarvelContext } from '../context/marvelProvider';





export default function Stories() {
    const { stories } = useContext(MarvelContext);
    console.log(stories)

    // const imgPath = '/standard_fantastic.';

    useEffect(() => {
      stories;
    },[stories]);

    return (
        <section>
            {stories.map((serie) =>
                <h1>{serie.title}</h1>
            )}
        </section>
    )
}