import styles from '../../styles/about.module.css';
export const metadata = {
  title: 'About | nyt-bestSeller',
};
export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p>Welcome to the official explorer for The New York Times Best Seller list explorer.</p>
      <p>We hope you enjoy your stay!</p>
      <p> &copy; Next JS is very great!</p>
      <div className={styles.madeby}>따라큐Q</div>
    </main>
  );
}
