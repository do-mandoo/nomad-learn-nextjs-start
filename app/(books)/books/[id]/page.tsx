import { BookDetail } from '../../../../components/BookDetail';
import { API_URL } from '../../../constants';

export default async function BookDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${API_URL}/list?name=${params.id}`);
  const data = await res.json();
  const books = data.results.books;

  return (
    <div>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      >
        {data.results.display_name} Books
      </h2>
      <BookDetail books={books} />
    </div>
  );
}
