import { createHtmlElement } from "./helpers";

function createHomepage() {
  const main = document.createElement("main");
  main.classList.add("main");
  const titleKanji = createHtmlElement("h1", null, ["titleKanji"], "四合わせ");
  const title = createHtmlElement("h1", null, ["title"], "SHIAWASE RAMEN");
  const hr = document.createElement("hr");
  const caption = createHtmlElement(
    "p",
    null,
    ["caption"],
    "Exquisite. Authentic. Japanese Ramen"
  );

  main.appendChild(titleKanji);
  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(caption);

  return main;
}

export { createHomepage };
