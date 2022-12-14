import { createHomepage } from "./home";
import { createNav } from "./navbar";
import { createFooter } from "./footer";

const content = document.querySelector(".content");

content.appendChild(createNav());
content.appendChild(createHomepage());
content.appendChild(createFooter());
