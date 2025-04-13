import { BookDetail } from '../../../../components/BookDetail';
import { API_URL } from '../../../constants';

type Props = {
  params: { id: string };
};

export default async function BookDetailPage({ params }: Props) {
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
