import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  //   return withAuth(req);
  try {
    console.log("Middleware invoked for URL:", req.url);
    return await withAuth(req);
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: ["/create-post"],
};
