import { router } from "./router";
import { HtmlUtil } from "./utils/html";

const rootDiv = document.getElementById("root");

HtmlUtil.render(rootDiv, router);
