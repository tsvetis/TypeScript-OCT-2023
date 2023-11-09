import { aboutPage } from "./views/about";
import { contactPage } from "./views/contact";
import { homePage } from "./views/home";

type RouterMap = {
  [key: string]: string;
};

const router: RouterMap = {
  "/": homePage,
  "/about": aboutPage,
  "/contact": contactPage,
};

const rootDiv = document.getElementById("root");

// on mount
if (rootDiv) {
  rootDiv.innerHTML = router[window.location.pathname];
}

const onNavigate = (pathname: string) => {
  const { origin } = window.location;
  window.history.pushState({}, pathname, `${origin}${pathname}`);

  if (rootDiv) {
    rootDiv.innerHTML = router[pathname];
  }
};

const homeAnchor: HTMLElement | null = document.getElementById("home");
const aboutAnchor = document.getElementById("about");
const contactAnchor = document.getElementById("contact");

homeAnchor?.addEventListener("click", () => {
  onNavigate("/");
});

aboutAnchor?.addEventListener("click", () => {
  onNavigate("/about");
});

contactAnchor?.addEventListener("click", () => {
  onNavigate("/contact");
});
