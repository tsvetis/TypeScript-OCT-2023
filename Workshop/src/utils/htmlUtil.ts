import { RouterMap } from "../types/routerTypes";

export class HtmlUtil {
  static render(rootDiv: HTMLElement | null, router: RouterMap) {
    if (!rootDiv) {
      throw Error("Missing root element!");
    }

    // On Init
    rootDiv.innerHTML = router[window.location.pathname];

    // Listner for events
    HtmlUtil.allEventListeners(rootDiv, router);
  }

  static allEventListeners(rootDiv: HTMLElement, router: RouterMap) {
    // capture elements
    const homeAnchor: HTMLElement | null = document.getElementById("home");
    const aboutAnchor = document.getElementById("about");
    const contactAnchor = document.getElementById("contact");

    // event listeners attachement
    homeAnchor?.addEventListener("click", () =>
      HtmlUtil.onNavigate(rootDiv, router, "/")
    );

    aboutAnchor?.addEventListener("click", () =>
      HtmlUtil.onNavigate(rootDiv, router, "/about")
    );

    contactAnchor?.addEventListener("click", () =>
      HtmlUtil.onNavigate(rootDiv, router, "/contact")
    );
  }

  static onNavigate(
    rootDiv: HTMLElement | null,
    router: RouterMap,
    pathname: string
  ) {
    const { origin } = window.location;
    window.history.pushState({}, pathname, `${origin}${pathname}`);

    if (rootDiv) {
      rootDiv.innerHTML = router[pathname];
    }
  }
}
