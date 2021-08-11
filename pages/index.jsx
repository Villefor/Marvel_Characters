// import styles from '../styles/Home.module.css'
// import {getAPI} from '../services/marvelAPI'
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <section>
      <nav>
        <p>Assemble your destiny!</p>
        <Link href="/characters">
          <a>Characters</a>
        </Link>
        <Link href="/comics">
          <a>Comics</a>
        </Link>
        <Link href="/series">
          <a>Series</a>
        </Link>
        <Link href="/creators">
          <a>Creators</a>
        </Link>
      </nav>
    </section>
  );
}
