/* import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
} */

import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  // // const movie = await getMovie(id); // 이 방법은 순차적인 방법이므로, 동시에 시작되진 않는다.
  // // const videos = await getVideos(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // promise all을 사용하면 동시에 시작된다.

  // return <h1>{movie.title}</h1>;
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
