import { createHtmlElement } from "./helpers";

function createNav() {
  const navItems = ["home", "menu", "about"];
  const ul = document.createElement("ul");

  navItems.forEach((item) =>
    ul.appendChild(createHtmlElement("li", null, [item], item))
  );

  const nav = document.createElement("nav");
  nav.appendChild(ul);

  return nav;
}

export { createNav };
