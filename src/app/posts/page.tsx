import PostsList from "@/components/PostsList";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  // const data = await response.json();
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      {/* this part move to the post lists */}
      {/* <ul> 
        {data.posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul> */}
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}
