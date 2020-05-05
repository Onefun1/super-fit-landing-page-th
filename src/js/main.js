import "./helpers/postDate";
import scrollSmooth from "./helpers/smooth-scroll.js";
import nav from "./modules/nav.js";
import banner from "./modules/banner.js";
import reviews from "./modules/reviews.js";

function main() {
  scrollSmooth();
  nav();
  // banner();
  reviews();
}

main();
