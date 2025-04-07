import "../scss/style.scss";
import aboutCardOpen from "./files/aboutCardOpen.js";
import addBookmark from "./files/addBookmark.js";
import burger from "./files/burger.js";
import dropdown from "./files/dropdown.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import moreText from "./files/moreText.js";
import passwordBtn from "./files/password-btn.js";
import productCount from "./files/productCount.js";
import removeWarn from "./files/removeWarn.js";
import scrollables from "./files/scrollables.js";
import searchToggle from "./files/searchToggle.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{ src: "#modal-products", type: "inline" }]);

dropdown();
burger();
sliders();
scrollables();
productCount();
tab();
searchToggle();
aboutCardOpen();
inputmask();
addBookmark();
mediaAdaptive();
map();
removeWarn();
moreText();
passwordBtn();

Shareon.init();
