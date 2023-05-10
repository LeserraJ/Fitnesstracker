
async function fetchData() {
  await new Promise ((resolve)=> setTimeout
  (resolve, 3000));
  
  return [1, 2, 3];
}



export default async function Home() {
  const data = await fetchData();


  console.log(data);

  return (
        <main>
          <h1>Landing Page</h1>
        </main>
  );
}
