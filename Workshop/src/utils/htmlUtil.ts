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
    const usersAnchor: HTMLElement | null = document.getElementById("users");
    const postsAnchor = document.getElementById("posts");

    // event listeners attachement
    usersAnchor?.addEventListener("click", () =>
      HtmlUtil.onNavigate(rootDiv, router, "/")
    );

    postsAnchor?.addEventListener("click", () =>
      HtmlUtil.onNavigate(rootDiv, router, "/post")
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
