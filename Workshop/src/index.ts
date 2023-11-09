import { router } from "./router";
import { HtmlUtil } from "./utils/html-util";

const rootDiv = document.getElementById("root");

HtmlUtil.render(rootDiv, router);
