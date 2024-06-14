"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log(title);
  console.log(body);

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts");
}
