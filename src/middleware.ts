import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { currentUser } from "./Services/AuthService";

export async function middleware(request: NextRequest) {
  const AuthRouter = ["/login", "/singup"];
  const { pathname } = request.nextUrl;
  console.log(pathname);
  type Role = keyof typeof rolebaseRoute;
  const rolebaseRoute = {
    USER: [/^\/profile/],
    ADMIN: [/^\/admin/],
  };
  const user = {
    name: "sahad",
    email: "aksahad234567@gmail.com",
    role: "USER",
  };
  const token = await currentUser();
  console.log("userToken", token);

  if (!user) {
    if (AuthRouter.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && rolebaseRoute[user?.role as Role]) {
    const routes = rolebaseRoute[user?.role as Role];
    console.log(routes);
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about", "/profile", "/login"],
};
