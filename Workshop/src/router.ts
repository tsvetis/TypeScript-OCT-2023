import { RouterMap } from "./types/router";
import { aboutPage } from "./views/about";
import { contactPage } from "./views/contact";
import { homePage } from "./views/home";

export const router: RouterMap = {
  "/": homePage,
  "/about": aboutPage,
  "/contact": contactPage,
};
