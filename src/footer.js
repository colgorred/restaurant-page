import { createHtmlElement } from "./helpers";

function createFooter() {
  const footer = document.createElement("footer");

  const p = createHtmlElement(
    "p",
    null,
    ["github-text"],
    "Made with ♥ by colgorred"
  );

  footer.appendChild(p);

  return footer;
}

export { createFooter };
