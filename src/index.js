import { createHomepage } from "./home";
import { createNav } from "./navbar";

const content = document.querySelector(".content");
content.appendChild(createNav());
content.appendChild(createHomepage());
