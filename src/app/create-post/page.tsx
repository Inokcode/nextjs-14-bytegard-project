import { createPost } from "@/actions/actions";

export default function Page() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create posts</h1>
      <form className="h-10 space-x-2 mt-10" action={createPost}>
        <input
          className="border rounded px-3 h-full"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <button className="h-full bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
}

//need to add form here
