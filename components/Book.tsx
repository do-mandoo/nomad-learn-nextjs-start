'use client';

import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Book({ encoded, display_name }: { encoded: string; display_name: string }) {
  return (
    <>
      <Link prefetch className={styles.button} href={`/books/${encoded}`}>
        {display_name} →
      </Link>
    </>
  );
}
