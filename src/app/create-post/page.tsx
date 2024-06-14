import { createPost } from "@/actions/actions";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

export default async function Page() {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create posts</h1>
      <form
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
        action={createPost}
      >
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        />
        <button className="h-10 bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
}

//need to add form here
