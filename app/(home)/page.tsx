import styles from '../../styles/home.module.css';
import Book from '../../components/Book';
import { API_URL } from '../../lib/constants';

export const metadata = {
  title: 'Home | nyt-bestSeller',
};

async function getBooks() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/lists`);
  const data = await response.json();
  return data.results;
}

export default async function HomePage() {
  const books = await getBooks();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <div className={styles.grid}>
        {books.map(book => (
          <Book
            key={book.list_name}
            encoded={book.list_name_encoded}
            display_name={book.display_name}
          />
        ))}
      </div>
    </div>
  );
}
