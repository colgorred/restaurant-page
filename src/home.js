import { createHtmlElement } from "./helpers";

function createHomepage() {
  const main = document.createElement("main");
  main.classList.add("main");
  const titleKanji = createHtmlElement("h1", null, ["titleKanji"], "四合わせ");
  const title = createHtmlElement("h1", null, ["title"], "SHIAWASE");
  const titleSub = createHtmlElement("h1", null, ["titleSub"], "MISO RAMEN");
  const hr = document.createElement("hr");
  const caption = createHtmlElement(
    "p",
    null,
    ["caption"],
    "Exquisite. Authentic. Japanese Ramen"
  );
  const menuButton = createHtmlElement(
    "button",
    null,
    ["menuButton"],
    "View Menu"
  );

  main.appendChild(titleKanji);
  main.appendChild(title);
  main.appendChild(titleSub);
  main.appendChild(hr);
  main.appendChild(caption);
  main.appendChild(menuButton);

  return main;
}

export { createHomepage };
