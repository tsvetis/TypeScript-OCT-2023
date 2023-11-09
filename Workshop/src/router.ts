import { RouterMap } from "./types/routerTypes";
import { postPage } from "./views/post";
import { userPage } from "./views/user";

export const router: RouterMap = {
  "/": userPage,
  "/post": postPage,
};
