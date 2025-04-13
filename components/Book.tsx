'use client';

import styles from '../styles/home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Book({ encoded, display_name }: { encoded: string; display_name: string }) {
  return (
    <>
      {/* <motion.div
        whileHover={{
          y: 2, // 살짝 아래로 눌림
          scale: 0.98, // 축소
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)', // hover 시 그림자 줄임
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      > */}
      <Link className={styles.button} href={`/books/${encoded}`}>
        {display_name} →
      </Link>
      {/* </motion.div> */}
    </>
  );
}
