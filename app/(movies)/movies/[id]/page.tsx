// async await 방법 1
// export default async function MovieDetail({ params }: { params: Promise }) {
//   const id = (await params).id;
//   return <h1>Movie {id}</h1>;
// }

// async await 방법2
export default async function MovieDetail({ params }) {
  const { id } = await params;
  return <h1>Movie {id}</h1>;
}
