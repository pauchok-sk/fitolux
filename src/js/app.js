import "../scss/style.scss";
import aboutCardOpen from "./files/aboutCardOpen.js";
import burger from "./files/burger.js";
import dropdown from "./files/dropdown.js";
import inputmask from "./files/inputmask.js";
import productCount from "./files/productCount.js";
import scrollables from "./files/scrollables.js";
import searchToggle from "./files/searchToggle.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";

Fancybox.bind("[data-fancybox]");

dropdown();
burger();
sliders();
scrollables();
productCount();
tab();
searchToggle();
aboutCardOpen();
inputmask();