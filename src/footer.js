import { createHtmlElement } from "./helpers";

function createFooter() {
  const footer = document.createElement("footer");

  const p = createHtmlElement("p", null, ["github-text"], "Made with ♥ by");

  const github = createHtmlElement("a", null, ["github-link"], "colgorred");
  github.setAttribute("href", "https://github.com/colgorred");

  footer.appendChild(p);
  footer.appendChild(github);

  return footer;
}

export { createFooter };
