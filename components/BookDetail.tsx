import styles from '../styles/detail.module.css';
type Book = {
  title: string;
  author: string;
  description: string;
  book_image: string;
  amazon_product_url: string;
};

export function BookDetail({ books }: { books: Book[] }) {
  return (
    <div className={styles.container}>
      {books.map(book => (
        <div className={styles.card} key={book.title}>
          <img className={styles.image} src={book.book_image} alt={book.title} />
          <h3>{book.title}</h3>
          <p className={styles.author}>{book.author}</p>
          <a className={styles.link} href={book.amazon_product_url} target='_blank'>
            Buy now
          </a>
        </div>
      ))}
    </div>
  );
}
