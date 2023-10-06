import Link from "next/link";
export default async function albums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return (
    <div>
      <div>
        <h3>Album List</h3>
        <ol>
          {data.map((item: any, i: number) => (
            <li key={item.id}>
              <Link href={`/albums/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
