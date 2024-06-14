import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsList() {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // to delay manally

  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  // const data = await response.json();
  //useing prisma
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {/* {data.posts.map((post) => ( */}
      {posts.map((post) => (
        <li key={post.id} className="mb-5">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
