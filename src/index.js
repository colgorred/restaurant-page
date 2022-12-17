import { createHomepage } from "./home";
import { createNav } from "./navbar";
import { createFooter } from "./footer";
import { createMenu } from "./menu";

function addNavEvents() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
}

const content = document.querySelector(".content");

function init() {
  content.appendChild(createNav());
  addNavEvents();
  content.appendChild(createHomepage());
  content.appendChild(createFooter());
}

function loadMenu() {
  const main = document.querySelector(".main");
  const nav = document.querySelector("nav");
  main.remove();
  nav.after(createMenu());
}

function loadHome() {
  const main = document.querySelector(".main");
  const nav = document.querySelector("nav");
  main.remove();
  nav.after(createHomepage());
}

init();
