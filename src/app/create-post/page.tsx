// import { createPost } from "@/actions/actions"; bcz form moved to new components
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

import Form from "@/components/Form";

export default async function Page() {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create posts</h1>
      <Form />
    </main>
  );
}

//need to add form here
