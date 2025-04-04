import Scrollable from "../lib/Scrollable.js";

export default function scrollables() {
  new Scrollable(".s-products__nav");

  if (window.matchMedia("(max-width: 1365px)").matches) {
    new Scrollable("#archive-nav")
    new Scrollable("#about-product-nav")
  }
}
