import React from "react";

export default async function album({ params }: { params: { album: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.album}`
  );
  const data = await response.json();
  console.log(data);
  console.log(params.album);
  return (
    <div>
      <p>album name</p>
      <p>{params.album}</p>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}
