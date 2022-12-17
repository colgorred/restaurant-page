import { createHtmlElement } from "./helpers";

const menu = [
  {
    name: "Hokkaido Miso",
    description: "Strong saltiness with a deep flavor ",
    price: "$15",
  },
  {
    name: "Shinshu Miso",
    description:
      "The most popular choice of Miso - strong aroma with a hint of sourness",
    price: "$15",
  },
  {
    name: "Kyushu Miso",
    description: "Sweet Miso made from premium oatmeal",
    price: "$15",
  },
  {
    name: "Edo-Mae Miso",
    description: "Sweet Miso with slight saltiness made from fermented rice",
    price: "$15",
  },
];

function createMenu() {
  const main = document.createElement("main");
  main.classList.add("main");

  const menuKanji = createHtmlElement("p", null, ["titleKanji"], "メニュー");
  const menuTitle = createHtmlElement("h1", null, ["menuTitle"], "Menu");

  const hr = document.createElement("hr");

  main.appendChild(menuKanji);
  main.appendChild(menuTitle);
  main.appendChild(hr);

  menu.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-item"], null);

    const name = createHtmlElement("h2", null, ["red"], item.name);
    const description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const price = createHtmlElement("h2", null, ["red"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
  });

  return main;
}

export { createMenu };
